const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")

const questions = [
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

// function to write README file
const writeToFile = (fileName, data) => {

    const content = generateMarkdown(data);

    fs.writeFile(fileName, content, (err) => {

        if (err) console.log(err);

    });
}

// function to initialize program
const promptQuestions = () => {

    inquirer
        .prompt(questions)
        .then(data => {

            writeToFile("README_OUTPUT.md", data);

        })
        .then(() => console.log("README file created successfully."))
        .catch((err) => console.error(err))
}

// function call to initialize program
promptQuestions();
