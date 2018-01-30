const textract = require('textract');
const colors = require('colors');

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
  'es6',
  'es7',
  'es2015',
  'functional programming',
  'fp',
  'git'
];

(async () => {
  const [_, __, ...filepaths] = process.argv;
  for (filepath of filepaths.filter(
    path => path.includes('docx') || path.includes('pdf')
  )) {
    const pathComponents = filepath.split('/');
    const fileName = pathComponents[pathComponents.length - 1];
    console.log(fileName.underline.bold);
    console.group();
    const text = await read(filepath);
    const lines = text.split('\n').filter(line => line && line !== ' ');
    keywords.forEach(keyword => {
      const regex = new RegExp(keyword, 'i');
      const matchedLines = lines
        .filter(line => line.match(regex))
        .map(line => line.replace(regex, keyword.bgYellow.black));
      console.log(`${matchedLines.length > 0 ? '✅' : '❌'} ${keyword} `);
      console.group();
      matchedLines.forEach(line => console.info('\t', line));
      console.groupEnd();
    });
    console.groupEnd();
    console.log('--------------------\n\n');
  }
})();
