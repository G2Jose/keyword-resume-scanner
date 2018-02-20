require('colors');
const { regex } = require('./utils.bs');
const { getCommandLineArgs } = require('./utils');

const printResumeResults = data => {
  console.log(data.fileName.underline.bold);
  console.group();
  data.results.forEach(({ lines, skill, wordsToHighlight }) => {
    if (lines.size > 0) {
      console.log(`✅ ${skill}`);
      console.group();
      console.group();
      const highlightedLines = Array.from(lines).map(line => {
        return wordsToHighlight.reduce((_highlightedLine, wordToHighlight) => {
          return _highlightedLine.replace(
            regex(wordToHighlight),
            wordToHighlight.bgYellow.black
          );
        }, line);
      });
      highlightedLines.forEach(line => console.log(line));
      console.groupEnd();
      console.groupEnd();
    } else if (!getCommandLineArgs()['only-matches']) {
      console.log(`❌ ${skill}`);
    }
  });
  console.groupEnd();
  console.log('--------------\n\n');
};

module.exports = {
  printResumeResults,
};
