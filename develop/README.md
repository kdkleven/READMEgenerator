
# Kyle's README Generator

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Description

The purpose of this application is to simplify the readme creation process by automatically generating a structured readme file based on responses provided on common readme sections, including: Title, Description, Installation Instructions, Usage Instructions, License, Contribution Guidelines, Test Instructions, and Questions (with contact information about the author), followed by a confirmation message that the README file is ready for immediate use.
      
## Table of Contents
1. [Install Instructions](#install-instructions)
2. [Usage Instructions](#usage-instructions)
3. [License](#license)
4. [Contribution Guidelines](#contribution-guidelines)
5. [Test Instructions](#test-instructions)
6. [Questions](#questions)

## Install Instructions

This application requires [Node.js](https://nodejs.org/en/) to run. To get started, ensure the following files and folders are present in the root directory: ```index.js``` (to initialize the application and write the README file), ```package.json``` (contains dependencies), and the folder ```/utils``` containing ```generateMarkdown.js``` (to generate markdown). Lastly, open an integrated or bash terminal and run ```npm i``` to install [Inquirer](https://www.npmjs.com/package/inquirer).
  
## Usage Instructions

Open ```index.js``` in an integrated terminal OR navigate to the directory in which index.js is stored, type ```node index.js```, and hit enter. Follow the prompts and respond as desired to populate your readme. After the last response is given, the README(.md) file will be automatically generated in the root directory. If using VScode, right-click on the README file and select 'Open Preview' to see your presentable README.

## License
  
This application is licensed under Mozilla Public License 2.0.

  [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

## Contribution Guidelines

Contributors are welcome. Just remember, this is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.

## Test Instructions

Tests are coming soon, and will be written using [Jest](https://jestjs.io/).

## Questions

If you have any questions, contact the author:  

GitHub [@kdkleven](https://github.com/kdkleven)  
Email [kylekleven8@gmail.com](mailto:kylekleven8@gmail.com)

## Deliverable

### Demo

<img src="assets/readmeGeneratorDemo.gif" width="500" alt="application demo">

### Repository

https://github.com/kdkleven/READMEgenerator

