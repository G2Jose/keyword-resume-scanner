// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Curry = require('bs-platform/lib/js/curry.js');

var getCommandLineArgs = (() => {
  const cmdLineArgs = require('command-line-args');
  return function(config) {
    return cmdLineArgs(config);
  };
})();

var commandLineOptionsConfig = require('./config');

var something = Curry._1(
  getCommandLineArgs,
  commandLineOptionsConfig.skillsToFind
);

console.log(something);

console.log(getCommandLineArgs);

exports.getCommandLineArgs = getCommandLineArgs;
exports.commandLineOptionsConfig = commandLineOptionsConfig;
exports.something = something;
/* getCommandLineArgs Not a pure module */
