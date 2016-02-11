import BB from 'bluebird';
import { spawn } from 'child_process';
import chalk from 'chalk';
import fsAsync from 'file-async';

let spawnAsync = ({cwd, executable, prefix, paramsArray, verboseLevel}) => {
  return new BB.Promise((resolve, reject) => {
    return fsAsync.exists(cwd).then((exists) => {
      // check if cwd exists
      // only run in destination folder if it exists
      let spawnOptions = { cwd: undefined, env: process.env };
      if (exists) {
        spawnOptions.cwd = cwd;
      }

      var spawnCmd = spawn(executable, paramsArray, spawnOptions)
      .on('error', (err) => {
        console.error('cwd:', cwd);
        throw err;
      });

      var outputs = [];

      // print header
      var fullCommand = prefix +
        chalk.gray(executable + ' ') +
        chalk.bold(paramsArray.join(' ') +
        '\n');

      let printOutput = (verboseLevel, data, color) => {
        // exit if verbose is zero
        if (verboseLevel <= 0 || !data) {
          return;
        }
        process.stdout.write(color(data.toString()));
      };

      printOutput(
        verboseLevel + 1,
        fullCommand,
        chalk.white
      );

      spawnCmd.stdout.on('data', (data) => {
        outputs.push(data);

        // print output
        printOutput(
          verboseLevel,
          data,
          chalk.gray);
      });

      spawnCmd.stderr.on('data', (data) => {
        outputs.push(data);

        // print output
        printOutput(
          verboseLevel,
          data,
          chalk.gray.bold);
      });

      spawnCmd.on('close', (code) => {
        var resultObject = {
          executable,
          cwd: spawnOptions.cwd,
          code,
          message: outputs.join('\n')
        };

        if (code !== 0) {
          reject(resultObject);
        } else {
          resolve(resultObject);
        }
      });

    });
  });
};

export default spawnAsync;
