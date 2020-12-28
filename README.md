# README Generator
![Last Commit](https://img.shields.io/github/last-commit/macz-norton/readme-generator)

## Description

The readme generator is a command-line application that dynamically generate a README.md file from a user's input using the Inquirer package.

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [Credits](#credits)
* [License](#license)

## Installation

1. Clone this repository (via SSH) with this command in your terminal: `git@github.com:macz-norton/readme-generator.git`
2. Open the integrated terminal
3. Install Node.js by running `npm i` in your terminal

## Usage

To run the command-line application following installation, run `node index.js` in your terminal.

You will be prompted with questions and your answers will be used to build the README_OUTPUT.md generated in the `output` folder:
* Link to the repository: [https://github.com/macz-norton/readme-generator](https://github.com/macz-norton/readme-generator)
* Video that demonstrates the application's functionality:
![video walkthrough](https://share.getcloudapp.com/llun7Elr)

## Tests

1. When you run `node index.js` in your terminal, you are prompted for information about your application repository.
2. The information you provide is added to the respective sections of the generated `README_OUTPUT.md` file.
3. When you choose a license, the badge for that license populates at the top of the page.
4. Your GitHub username and email are added to the `Questions` section of the README as methods to reach you as the project owner for questions.
5. The `Table of Contents` links are anchor links to the respective sections of the page.

## Credits

* [Inquirer.js npm package](https://www.npmjs.com/package/inquirer)
* [Node.js](https://nodejs.org/en/)
* [Choose A License, GitHub, Inc.](https://choosealicense.com/)
* [Licensing a repository, GitHub, Inc.](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/licensing-a-repository#choosing-the-right-license)
* [Markdown License badges](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)

## License

[MIT License](https://choosealicense.com/licenses/mit/)