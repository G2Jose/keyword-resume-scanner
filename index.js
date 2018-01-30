/* eslint-disable no-console */

const textract = require('textract');
require('colors');

const config = {
  preserveLineBreaks: true
};

const read = filePath =>
  new Promise((resolve, reject) => {
    textract.fromFileWithPath(filePath, config, (error, text) => {
      if (!error && text) resolve(text);
      else reject(error);
    });
  });

const keywords = [
  'react',
  'redux',
  'flux',
  'node',
  'es6',
  'es7',
  'es2015',
  'functional programming',
  'fp',
  'git'
];

const filterFormats = path => path.includes('docx') || path.includes('pdf');

const getFileNameFromPath = path => {
  const pathComponents = path.split('/');
  return pathComponents[pathComponents.length - 1];
};

const getNonEmptyLines = text =>
  text.split('\n').filter(line => line && line !== ' ');

const logMatchedLines = lines => {
  console.group();
  lines.forEach(line => console.info('\t', line));
  console.groupEnd();
};

const getLinesMatchingKeyword = (keyword, lines) => {
  const regex = new RegExp(keyword, 'i');
  return lines
    .filter(line => line.match(regex))
    .map(line => line.replace(regex, keyword.bgYellow.black));
};

(async () => {
  const [_, __, ...filepaths] = process.argv;
  for (const filepath of filepaths.filter(filterFormats)) {
    const fileName = getFileNameFromPath(filepath);
    console.log(fileName.underline.bold);
    console.group();
    const text = await read(filepath);
    const lines = getNonEmptyLines(text);
    keywords.forEach(keyword => {
      const matchedLines = getLinesMatchingKeyword(keyword, lines);
      console.log(`${matchedLines.length > 0 ? '✅' : '❌'} ${keyword}`);
      logMatchedLines(matchedLines);
    });
    console.groupEnd();
    console.log('--------------------\n\n');
  }
})();
