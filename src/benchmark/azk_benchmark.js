import BB from 'bluebird';
import merge from 'lodash.merge';
import spawnAsync from '../utils/spawn_async';
import SendData from './send_data';
import { matchFirstRegex } from '../utils/regex_helper';
import chalk from 'chalk';
import dotenv from 'dotenv';
import actions from './actions';
import Table from 'cli-table';

export default class AzkBenchmark {
  constructor(opts) {
    this.opts = merge({}, opts);
    dotenv.load({ silent: true });

    this._validade(this.opts);

    // load senddata
    this.sendData = new SendData(this.opts);

    // load actions
    this.preActions = actions.preActions;
    this.preActionsPrefix = (
      chalk.gray('[') +
      chalk.blue('provision') +
      chalk.gray(']') +
      chalk.white(' $> ')
    );

    this.mainActions = actions.mainActions;
    this.mainActionsPrefix = (
      chalk.gray('[') +
      chalk.blue('benchmarking') +
      chalk.gray(']') +
      chalk.white(' $> ')
    );

    this.getVersionPrefix = (
      chalk.gray('[') +
      chalk.blue('azk version') +
      chalk.gray(']') +
      chalk.white(' $> ')
    );
  }

  _validade(opts) {
    if (!opts.azkBinPath) {
      throw new Error(`azkBinPath (${opts.azkBinPath}) cannot be null/undefined`);
    }
  }

  start() {
    return this._runPreActions()
    .then(this._getAzkVersion.bind(this))
    .then(this._runMainActions.bind(this))
    .then(this._processResults.bind(this))
    .catch((err) => {
      err.code = err.code;
      throw err;
    });
  }

  _runPreActions() {
    return BB.Promise.mapSeries(this.preActions, (params) => {
      let start = this._startTimer();
      let params_result = params(this.opts);
      return this._spawnCommand(
        params_result,
        this.preActionsPrefix,
        this.opts.verboseLevel
      )
      .then((result) => {
        let resultToSend = {
          command: 'azk ' + params_result.join(' '),
          result: result,
          time: this._stopTimer(start)
        };
        if (this.opts.verboseLevel > 0) {
          process.stdout.write(' ' + chalk.green(resultToSend.time.toString() + 'ms') + '\n\n');
        }
        return resultToSend;
      });
    });
  }

  _startTimer() {
    var start = new Date().getTime();
    return start;
  }

  _stopTimer(start) {
    var end = new Date().getTime();
    var time = end - start;
    return time;
  }

  _spawnCommand(params, prefix, verboseLevel) {
    return spawnAsync({
      cwd          : this.opts.destPath,
      executable   : this.opts.azkBinPath,
      paramsArray : params,
      prefix       : prefix,
      verboseLevel: verboseLevel - 1,
    });
  }

  _getAzkVersion() {
    return this._spawnCommand(['version'], this.getVersionPrefix, this.opts.verboseLevel - 1)
    .then((versionResult) => {
      this.azk_version = matchFirstRegex(versionResult.message, /(\d+\.\d+\.\d+)/)[1];
    });
  }

  _getMainActionsPromise() {
    return BB.Promise.mapSeries(this.mainActions, (params) => {
      let start = this._startTimer();
      return this._spawnCommand(params, this.mainActionsPrefix, this.opts.verboseLevel)
      .then((result) => {
        let resultToSend = {
          command: 'azk ' + params.join(' '),
          result: result,
          azk_version: this.azk_version,
          time: this._stopTimer(start)
        };
        if (this.opts.verboseLevel > 0) {
          process.stdout.write(' ' + chalk.green(resultToSend.time.toString() + 'ms') + '\n\n');
        }
        return resultToSend;
      });
    });
  }

  _runMainActions() {
    let runTimes = 1;
    let mainActionsList = [];
    if (this.opts.repeat > 1) {
      runTimes = this.opts.repeat;
    }

    for (let i = 0; i < runTimes; i++) {
      mainActionsList.push(this._getMainActionsPromise.bind(this));
    }

    return BB.Promise.mapSeries(mainActionsList, (mainPromise) => {
      return mainPromise();
    });
  }

  _processResults(finalResultsList) {
    let table_args = (this.opts.plain) ? {
      chars: { 'top': '' , 'top-mid': '' , 'top-left': '' , 'top-right': '',
       'bottom': '' , 'bottom-mid': '' , 'bottom-left': '' , 'bottom-right': '',
       'left': '' , 'left-mid': '' , 'mid': '' , 'mid-mid': '',
       'right': '' , 'right-mid': '' , 'middle': ' ' },
      style: { 'padding-left': 0, 'padding-right': 0 }
    } : {
      style: {head: ['white'], border: ['grey']}
    };

    var table = new Table(table_args);

    // add each
    finalResultsList.forEach((finalResults) => {
      // each result
      finalResults.forEach((item) => {
        let row = {};
        row[item.command] = item.time;
        table.push(row);
      });
    });

    // compute total
    finalResultsList.forEach((finalResults) => {
      // total
      let total_time = finalResults.reduce((r, c) => {
        return r + c.time;
      }, 0);

      table.push({total: total_time});

      console.log(chalk.white.bold('Benchmark Results:'));
      console.log(table.toString());
    });

    // send all
    finalResultsList.forEach((finalResults) => {
      if (this.opts.send) {
        this._sendData(finalResults);
      } else {
        console.error(chalk.green('Benchmark finished. No data was sent.'));
        return 0;
      }
    });
  }

  _sendData(finalResults) {
    if (this.opts.verboseLevel > 0) {
      console.log('Sending data to Keen.IO...');
    }
    return BB.Promise.mapSeries(finalResults, (result) => {
      // send each result to Keen.IO
      return this.sendData.send('profiling', result);
    })
    .then((results) => {
      // check if all data was sent to Keen.IO
      let successResults = results.filter((item) => {
        return (item.created === true);
      });
      if (successResults.length === results.length) {
        console.log(chalk.green('Benchmark finished. All data sent to Keen.IO.'));
        return 0;
      } else {
        console.log(chalk.red('Benchmark finished. Some data was not sent to Keen.IO:'));
        console.log(results);
        return 1;
      }
    });
  }
}
