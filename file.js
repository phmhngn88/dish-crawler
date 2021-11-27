import fs, { existsSync } from 'fs';

function writeToFile(obj, filename) {
  let configFile;
  let config;
  if (fs.existsSync(`./${filename}`)) {
    configFile = fs.readFileSync(`./${filename}`);
    config = JSON.parse(configFile);
  } else {
    config = [];
  }
  config.push(obj);
  var configJSON = JSON.stringify(config);
  fs.writeFileSync(`./${filename}`, configJSON);
}

export default writeToFile;
