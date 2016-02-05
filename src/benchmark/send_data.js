import BB from 'bluebird';
import Keen from 'keen-js';
import os from 'os';
import osName from 'os-name';
import { merge } from 'lodash';

export default class SendData {
  constructor(opts) {
    this._opts = merge({}, opts);
  }

  send(event_name, data) {
    var client = new Keen({
      // prod
      projectId: this._opts.projectId,
      writeKey : this._opts.writeKey
    });

    // add host info
    data.device_info = {
      os          : osName(),
      procArch    : os.arch(),
      totalMemory : Math.floor(os.totalmem() / 1024 / 1024),
      cpuInfo     : os.cpus()[0].model,
      cpuCount    : os.cpus().length
    };
    data.keen = { timestamp: new Date().toISOString() };

    return new BB.Promise( (resolve, reject) => {
      client.addEvent(event_name, data, (err, res) => {
        if (err) {
          reject(err);
        } else {
          if (this._opts.verboseLevel > 0) {
            console.log(res);
          }
          resolve(res);
        }
      });
    });
  }
}
