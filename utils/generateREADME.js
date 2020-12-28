// function to generate markdown for README
const generateREADME = (data) => `# ${data.title}

${addLicenseBadge(data.license)}

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

${chooseLicense(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For additional questions, please reach me via email at [${data.email}](mailto:${data.email}) or GitHub at [https://github.com/${data.GitHub}](https://github.com/${data.GitHub})

`;

chooseLicense = (license) => {
  switch (license) {
      case "MIT":
        return `[MIT License](https://choosealicense.com/licenses/mit/)`;
        break;
      case "APACHE 2.0":
        return `[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
        break;
      case "GNU GPLv3":
        return `[GNU GPL 3.0](https://choosealicense.com/licenses/)`;
        break;
      case "Mozilla Public 2.0":
        return `[Mozilla Public 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
        break;
    }
}

addLicenseBadge = (license) => {
  switch (license) {
      case "MIT":
        return `[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
        break;
      case "APACHE 2.0":
        return `[![Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
        break;
      case "GNU GPLv3":
        return `[![GNU GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        break;
      case "Mozilla Public 2.0":
        return `[![Mozilla Public 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
        break;
    }
}

module.exports = generateREADME;