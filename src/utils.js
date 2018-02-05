const cmdLineArgs = require('command-line-args');
const { cmdLineOptions } = require('./config');

const regex = keyword => new RegExp(`\\b${keyword}\\b`, 'i');
const getFileNameFromPath = path => {
  const pathComponents = path.split('/');
  return pathComponents[pathComponents.length - 1];
};

const filterFormats = path => path.includes('docx') || path.includes('pdf');
const getNonEmptyLines = text =>
  text.split('\n').filter(line => line && line !== ' ');
const getLinesMatchingKeyword = (keyword, lines) =>
  lines.filter(line => line.match(regex(keyword)));

const getCommandLineArgs = () => cmdLineArgs(cmdLineOptions);

module.exports = {
  regex,
  getFileNameFromPath,
  filterFormats,
  getNonEmptyLines,
  getLinesMatchingKeyword,
  getCommandLineArgs,
};
