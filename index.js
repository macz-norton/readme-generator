const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {
        type: "input", 
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "usage"
    },
    {
        type: "list",
        message: "What type of license should your project have?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repo?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "npm test"
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

            console.log(response);

            const content = generateMarkdown(response);

        });

}

// function call to initialize program
init();
