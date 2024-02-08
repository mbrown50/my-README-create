// Include packages needed for this application

// to know it's from a file and not a package needs "./"
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const { error } = require('console');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter title:',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter description:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Info on installation:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Info on usage:',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose license:',
        choices: ['MIT', 'GPL v3', 'MPL 2.0','other',''],
        name: 'license',
    },
    {
        type: 'input',
        message: 'Info on contributing:',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Info on tests:',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'Enter email:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter GitHub username:',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter deployed site:',
        name: 'deployed',
    },

]

// Create a function to write README file
function writeToFile(fileName, data) {
    // save file to disk 
    fs.writeFile(fileName, generateMarkdown(data), (err) => { 
        // In case of a error throw err.
        err ? console.error(err) : console.log('Success! README.md file created.')
    });
}

// Create a function to initialize app
function init() {
    const filename = 'README.md';
    // ask questions using inquierer
    inquirer.prompt(questions)
        .then(data => {
            writeToFile(filename, data);
        })
}

// Function call to initialize app
init();

