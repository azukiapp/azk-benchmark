import BB from 'bluebird';
import which from 'which';

let whichHelper = (commandPath) => {
  return new BB.Promise((resolve, reject) => {
    which(commandPath, (err, resolvedPath) => {
      if (err) {
        // err is returned if no "commandPath" is found on the PATH
        err = new Error(`'${commandPath}' not found in PATH: ${process.env.PATH}. Original error: ${err.message}`);
        reject(err);
      } else {
        // if it is found, then the absolute path to the exec is returned
        resolve(resolvedPath);
      }
    });
  });
};

export default whichHelper;
