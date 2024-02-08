// TODO: Include packages needed for this application

// to know it's from a file and not a package needs "./"
const generateMarkdown = require('./utils/generateMarkdown')

const inquier = require('inquirer');
const fs = require('fs');
const { type } = require('os');
const { error } = require('console');

// TODO: Create an array of questions for user input
const questions = {
    type: 'input',
    message: 'Answer the quesitons:',
    name: 'answer'
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // save file to disk

}

// TODO: Create a function to initialize app
function init() {
    // ask questions using inquierer
    // use questions array from above

    // mock object that you will create later
    const mockAnswer = {
        title: 'hi',
        description: 'stuff',
        license: 'MIT'
    };

    const readme = generateMarkdown(mockAnswer);

    console.log(readme);
    
    /*
    console.log(generateMarkdown(
        {'title': 'hi', description: 'stuff'}
        )
    */
    
    // or does this go into the above writeToFile funciton??
   /* inquirer.prompt(questions)
        .then (data => {
            // call generateMarkdown function
            fs.writeFile('text.txt', JSON.stringify(data, null, 4),  // 4 indenting
            err => err ? console.error(err) : console.log(err);
        }
    // once the questions are answered, generate the readme file and save to disk
    // use writeToFile function above
    
    let readme = getBigLongSting();
    wreitetofile(readme);
    console.log('done!')
    */
}

// Function call to initialize app
init();
