// function to generate markdown for README
const generateREADME = (data) => `# ${data.title}

${data.description}

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

The project's license is: ${data.license}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Email: ${data.email}
GitHub: ${data.GitHub}

`;

module.exports = generateREADME;