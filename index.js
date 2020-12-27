const inquirer = require("inquirer");

// array of questions for user
const questions = [
    {
        message: "What is your GitHub username?"
    },
    {
        message: "What is your email address?"
    },
    {
        message: "What is your project name?"
    },
    {
        message: "Please write a short description of your project."
    },
    {
        type: "list",
        message: "What type of license should your project have?"
        MIT, APACHE 2.0, GPL 3.0, BSD 3, None

    },
    {
        message: "What command should be run to install dependencies?"
        // add default response of npm i
    },
    {
        message: "What command should be run to run tests?"
        // add default response of npm test
    },
    {
        message: "What does the user need to know about using the repo?"
    },
    {
        message: "What does the user need to know about contributing to the repo?"
    },
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
