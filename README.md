# Stupid Resume Screener

## Usage

* If running on pdf files, you need to have `pdftotext`. For mac `brew install poppler`. Windows users [please use this link](https://www.apple.com/ca/retail/).
* Change keywords array in `index.js`
* Run `node index.js $path-to-file(s)`
  * `node index.js ~/resumes/*`
  * `node index.js ~/resumes/file1.docx ~/resumes/file2.docx`
