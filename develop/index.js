// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const license = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const GenerateReadMe = (response) =>
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

${response.license}

## Contributions

${response.contributions}

## Test Instructions

${response.testInstructions}

## Questions

If you have any questions, you can reach the author at:

**GitHub** https://github.com/${response.gitHubUser}

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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 1.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v3', 'Mozilla Public License 2.0', 'The Unlicense'],
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
    const readmePageContent = GenerateReadMe(response);

    module.exports = GenerateReadMe();
    
    writeToFile(readmePageContent);
});

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

