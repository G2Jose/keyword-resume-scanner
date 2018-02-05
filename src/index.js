#! /usr/bin/env node
/* eslint-disable no-console */

const textract = require('textract');
const { printResumeResults } = require('./printer');
const { skillsToFind } = require('./config');
const {
  getFileNameFromPath,
  filterFormats,
  getNonEmptyLines,
  getLinesMatchingKeyword,
  getCommandLineArgs,
} = require('./utils');

const config = {
  preserveLineBreaks: true,
};

const getResumeText = filePath =>
  new Promise((resolve, reject) => {
    textract.fromFileWithPath(filePath, config, (error, text) => {
      if (!error && text) resolve(text);
      else reject(error);
    });
  });

(async () => {
  const filePaths = getCommandLineArgs().src;
  for (const filepath of filePaths.filter(filterFormats)) {
    const fileName = getFileNameFromPath(filepath);
    const text = await getResumeText(filepath);
    const lines = getNonEmptyLines(text);

    const results = skillsToFind.reduce(
      (acc, currSkill) => {
        const matches = currSkill.matches.reduce(
          (accMatches, currMatch) => {
            const matchingLines = new Set([
              ...Array.from(accMatches.lines),
              ...getLinesMatchingKeyword(currMatch, lines),
            ]);
            return matchingLines && matchingLines.size > 0
              ? {
                  ...accMatches,
                  lines: matchingLines,
                  wordsToHighlight: [...accMatches.wordsToHighlight, currMatch],
                }
              : accMatches;
          },
          {
            lines: new Set(),
            skill: currSkill.name,
            wordsToHighlight: [],
          }
        );
        return { ...acc, results: [...acc.results, matches] };
      },
      {
        fileName,
        results: [],
      }
    );
    printResumeResults(results);
  }
})();
