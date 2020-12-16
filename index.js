const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        name: "title"
    },
    {
        description: "description"
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

    inquirer
    .prompt(questions)
    .then(response => {

        const content = generateMarkdown(response);

    })

    }

// function call to initialize program
init();
