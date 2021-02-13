// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

// process.argv[2]

// module.exports = {
//     pie,
//     predictable,
//   };

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },
    {
        type: 'input',
        name: 'installInstructions',
        message: 'How do you install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the application?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'What are the test instructions?',
    },
]).then((response) => {
    
    let responseBody = `Title: ${response.title} \n`;
    responseBody += `Description: ${response.description} \n`;
    responseBody += `Install Instructions: ${response.installInstructions} \n`;
    responseBody += `Usage: ${response.usage} \n`;
    responseBody += `Contributions: ${response.contributions} \n`;
    responseBody += `Test Instructions: ${response.testInstructions} \n`;

    fs.writeFile('readme.txt', responseBody, (err) =>
        err ? console.log(err) : console.log("Write successful")
    )

});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile('README.txt', VARIBLE, (err) =>
    // err ? console.error(err) : console.log('Write Successful')
    // );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
