require('colors');
const { regex } = require('./utils');

module.exports = {
	printResumeResults: data => {
		console.log(data.fileName.underline.bold);
		console.group();
		data.results.forEach(({ lines, skill, wordsToHighlight }) => {
			console.log(`${lines.size > 0 ? '✅' : '❌'} ${skill}`);
			if (lines.size > 0) {
				console.group();
				console.group();
				const highlightedLines = Array.from(lines).map(line => {
					return wordsToHighlight.reduce(
						(_highlightedLine, wordToHighlight) => {
							return _highlightedLine.replace(
								regex(wordToHighlight),
								wordToHighlight.bgYellow.black
							);
						},
						line
					);
				});
				highlightedLines.forEach(line => console.log(line));
				console.groupEnd();
				console.groupEnd();
			}
		});
		console.groupEnd();
		console.log('--------------\n\n');
	},
};
