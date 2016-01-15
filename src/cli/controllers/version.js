import fsAsync from 'file-async';
import path from 'path';
import { CliController } from 'cli-router';

class Version extends CliController {
  index() {
    return fsAsync.readFile(path.join(__dirname, '../../../../package.json'))
    .then(function(content) {
      var package_json = JSON.parse(content.toString());
      console.log('version: ' + package_json.version);
      return 0;
    });
  }
}

module.exports = Version;
