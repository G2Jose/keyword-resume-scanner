import { filter } from 'rxjs/operator/filter';

const {
  getFileNameFromPath,
  filterFormats,
  getNonEmptyLines,
  getLinesMatchingKeyword,
  getCommandLineArgs,
} = require('./utils.bs');

test('getFileNameFromPath', () => {
  const fileName = 'something.docx';
  const path = `something/somethingelse/${fileName}`;
  const expected = fileName;
  const actual = getFileNameFromPath(path);
  expect(actual).toEqual(expected);
});

test('filterFormats', () => {
  expect(filterFormats('one.docx')).toEqual(true);
  expect(filterFormats('two.pdf')).toEqual(true);
  expect(filterFormats('three.pptx')).toEqual(false);
});

test('getNonEmptyLines', () => {
  const text = `line1

line2`;
  const expected = ['line1', 'line2'];
  const actual = getNonEmptyLines(text);
  expect(actual).toEqual(expected);
});

test('getLinesMatchingKeyword', () => {
  const lines = ['contains keyword1', 'contains keyword2', 'contains Keyword3'];
  const keyword = 'keyword3';
  const expected = ['contains Keyword3'];
  const actual = getLinesMatchingKeyword(keyword, lines);
  expect(actual).toEqual(expected);
});
