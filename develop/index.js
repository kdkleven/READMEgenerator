// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const retLicense = require('./utils/generateMarkdown.js');
const fs = require('fs');
const license = "";

// TODO: Create an array of questions for user input
const generateReadMe = (response) =>
`
# ${response.title}
    
## Description

${response.description}
    
## Table of Contents
1. [Install Instructions](#install-instructions)
2. [Usage Instructions](#usage-instructions)
3. [License](#license)
4. [Contributions](#contributions)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)

## Install Instructions

${response.installInstructions}

Initilize npm by using the following command:

    npm init

Install dependencies using the following command:

    npm i

## Usage Instructions

${response.usage}

The application is invoked by using the following command:

    node index.js

## License

// ${generateMarkdown}

## Contributions

${response.contributions}

## Test Instructions

${response.testInstructions}

## Questions

If you have any questions, you can reach the author at:

**GitHub** (https://github.com/${response.gitHubUser})

**Email** ${response.email}
`;

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
        type: 'list',
        name: 'license',
        message: 'Which license will you use?',
        choices: ['Lic1', 'Lic2', 'Lic3', 'Lic4', 'Lic5']
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
    {
        type: 'input',
        name: 'gitHubUser',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
]).then((response) => {
    const readmePageContent = generateReadMe(response);
    license = response.license;
    
    writeToFile(readmePageContent);
});

module.exports = function(license) {
    license;
}

// TODO: Create a function to write README file
function writeToFile(content) {
    fs.writeFile('README.md', content, (err) =>
        err ? console.log(err) : console.log("Write successful")
    )
}

// TODO: Create a function to initialize app
function init() {
    // ???
}

// Function call to initialize app
init();

