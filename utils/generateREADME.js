// function to generate markdown for README
const generateREADME = (data) => `# ${data.title}

![${data.license}](https://img.shields.io/github/${data.license}

## Description

${data.description}

## Table of Contents
  
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

The installation required includes: ${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For additional questions, please reach me via email at [${data.email}](mailto:${data.email}) or GitHub at [https://github.com/${data.GitHub}](https://github.com/${data.GitHub})

`;

module.exports = generateREADME;