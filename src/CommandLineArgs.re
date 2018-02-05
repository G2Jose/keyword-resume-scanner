type config;
type config2;
type envVariables;

let getCommandLineArgs: config => envVariables = [%bs.raw{|
  (() => {
    const cmdLineArgs = require('command-line-args');
    return function(config) {
      return cmdLineArgs(config);
    }
  })()
  |}];
let commandLineOptionsConfig = [%bs.raw{|
  require('./config')
 |}];

let something = getCommandLineArgs(commandLineOptionsConfig##skillsToFind);

Js.log(something);
Js.log(getCommandLineArgs)