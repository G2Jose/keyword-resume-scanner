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
  {
    name: 'react',
    match: ['react', 'reactjs']
  },
  {
    name: 'redux',
    match: ['redux', 'flux']
  },
  {
    name: 'Modern JS',
    match: [
      'modern JS',
      'es6',
      'es7',
      'es2015',
      'es2016',
      'es2017',
      'esnext',
      'es next',
      'es6+'
    ]
  },
  {
    name: 'node',
    match: ['node', 'nodejs', 'node js']
  },
  {
    name: 'Functional Programming',
    match: ['fp', 'functional programming']
  },
  {
    name: 'Java',
    match: ['java']
  },
  {
    name: 'Spring',
    match: ['spring', 'springmvc', 'spring boot', 'springboot']
  },
  {
    name: 'Android',
    match: ['Android']
  },
  {
    name: 'iOS',
    match: ['ios', 'swift', 'objective c', 'objective-c', 'objectivec'],
  }
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
  const regex = new RegExp(`\\b${keyword}\\b`, 'i');
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
    keywords.forEach(category => {
      let matchedLines = [];
      let score = 0;
      category.match.forEach(wordToMatch => {
        matchedLines = matchedLines.concat(
          getLinesMatchingKeyword(wordToMatch, lines)
        );
      });
      console.log(`${matchedLines.length > 0 ? '✅' : '❌'} ${category.name}`);
      logMatchedLines(matchedLines);
    });
    console.groupEnd();
    console.log('--------------------\n\n');
  }
})();
