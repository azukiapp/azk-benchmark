import { CliController } from 'cli-router';

class VersionController extends CliController {
  index() {
    let version = require('../../../../package.json').version;
    console.log('version: ' + version);
    return 0;
  }
}

module.exports = VersionController;
