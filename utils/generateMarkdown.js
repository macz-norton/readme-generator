// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

  ${generateDescription(data.description)}

  ## Description

  ${data.description}

  ## Table of Contents
   
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

`;
}


function generateDescription ( description ) {

  return `##Description

  ${data.description}`;

}

console.log(generateMarkdown){

  title: "Testing",
  description: "Testing description"

}


module.exports = generateMarkdown;
