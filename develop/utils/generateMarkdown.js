const license = require('../index.js');

//renderLicenseBadge(license);
//const selLicense = new license();
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

let lic = [
// let obj = {name: "a", age: "b", color: "c"};
// let arrObj = [{name: "john"}];
  {
    "name": "Apache 2.0",
    "link": "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  },
  {
    "name": "Boost Software License 1.0",
    "link": "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  }
];
console.log("license" + license);
console.log("array" + lic[0].name);
// console.log("object" + obj.name);
// console.log("objectarr" + arrObj[0].name);

let activeLicense = lic.filter(name => {name.name === license); 
    
  console.log("activelicense"+ activeLicense);




// Apache 2.0 = [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// Boost Software License 1.0 = [![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
// BSD 3-Clause License = [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
// BSD 2-Clause License = [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
// CreativeCommons = [![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)
// Eclipse Public License 2.0 = [![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-1.0)
// GNU GPL v3 = [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// GNU GPL v2 = [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
// MIT License = [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// Mozilla Public License 2.0 = [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// The Unlicense = [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
// GNU AGPL v3 = [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
// GNU LGPL v3 = [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // ## License
    
  // This application is licensed under the ${response.license} license.
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ${renderLicenseBadge(response.license)}

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
  
  <license section>
  
  ## Contributions
  
  ${response.contributions}
  
  ## Test Instructions
  
  ${response.testInstructions}
  
  ## Questions
  
  If you have any questions, you can reach the author at:
  
  **GitHub** https://github.com/${response.gitHubUser}
  
  **Email** ${response.email}
`;
}

module.exports = generateMarkdown;
