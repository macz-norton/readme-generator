// Require npm packages
const inquirer = require("inquirer");
const fs = require("fs");

// Require generateREADME module
const generateREADME = require("./utils/generateREADME")

// Inquirer questions object
const questions = [
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Write a short description of your project.",
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
        choices: ["MIT", "Apache 2.0", "GNU GPLv3", "Mozilla Public 2.0"]
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contributing"
    },
    {
        type: "input",
        message: "What command should be used to run tests?",
        name: "test",
        default: "npm test"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "GitHub"
    },
    {
        type: "input", 
        message: "What is your email address?",
        name: "email"
    }
];

// Function to write README file
const writeToFile = (fileName, data) => {

    const content = generateREADME(data);

    fs.writeFile(fileName, content, (err) => {

        if (err) console.log(err);

    });
}

// Function to prompt Inquirer questions
const promptQuestions = () => {

    inquirer
        .prompt(questions)
        // Promise to `writeToFile`
        .then(data => {

            writeToFile("./output/README_OUTPUT.md", data);

        })
        .then(() => console.log("README file created successfully."))
        .catch((err) => console.error(err))
}

// Function called to initialize program
promptQuestions();
