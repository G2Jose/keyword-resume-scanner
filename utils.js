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

module.exports = {
	regex,
	getFileNameFromPath,
	filterFormats,
	getNonEmptyLines,
	getLinesMatchingKeyword,
};
