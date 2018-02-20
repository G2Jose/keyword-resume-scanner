# Keyword Resume Screener

A simple node application that screens files (pdfs & word files currently supported) for keywords and displays a quick summary. Made this so I can sift through tons of resumes really quickly.

<p align="center">
    <img src="https://raw.githubusercontent.com/G2Jose/keyword-resume-scanner/master/screenshots/screenshot.png"/>
</p>

## Usage

* If running on pdf files, you need to have `pdftotext` installed. For mac `brew install poppler`. Windows users [please use this link](https://www.apple.com/ca/retail/).
* Change keywords and matching criteria under `skillsToFind` in `config.js`
* Run `node index.js $path-to-file(s)`
  * `node index.js ~/resumes/*`
  * `node index.js ~/resumes/file1.docx ~/resumes/file2.docx`
* You can also link this as a global binary by running `npm link`. After this you can simple run `resume-screen $path-to-file(s)`

## Developing

Part of this codebase is written in ReasonML. If you're not familiar with this please read https://reasonml.github.io.

* Dependencies for ReasonML should be automatically installed, but if you run into issues please see https://reasonml.github.io/docs/en/global-installation.html
* Run `yarn start` to start the bsb which compiles ReasonML to JavaScript
