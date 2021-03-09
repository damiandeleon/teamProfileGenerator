// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Manager's name?",
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the Manager's Employee ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's email address?",
        },
        {
            type: 'input',
            name: 'managerPhone',
            message: "What is the Manager's phone number?",
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How would someone try to use this application?',
        },

        //below is a checkbox 
        // {
        //     type: 'checkbox',
        //     message: 'What license was used for this application?',
        //     name: 'license',
        //     choices: ['MIT', 'IBM', 'ISC'],
        // },
        {
            type: 'input',
            name: 'contributors',
            message: 'Did you have any contributors?',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What are the test instructions for this application?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username for contact?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What your email for questions?',
        },
    ])
    // console.log(data)
    .then((data) => {
        const filename = `teamProfile.html`;

        fs.writeFile(filename, 
            `# ${data.title}
## Table of Contents
* [Description](##description)
* [Installation](##installation)
* [Usage](##usage)
* [License](##license)
* [Contributors](##contributors)
* [Tests](##tests)
* [Questions](##questions)
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## License
${renderLicenseSection(data.license)}
## Contributors
${data.contributors}
## Tests
${data.tests}
## Questions
Please see my github | Contact me for questions
------------ | -------------
[Github Profile](https://github.com/${data.github}) | ${data.email}`,
            (err) =>
            err ? console.log(err) : console.log('Success!')
        )
    })


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if(license == "MIT"){
        return ('[![License: MIT](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)')
    } else if (license == "IBM") {
        return ('[![License: IBM](https://img.shields.io/badge/License-IBM-blue)](https://opensource.org/licenses/IBM)')
    } else if (license == "ISC") {
        return ('[![License: ISC](https://img.shields.io/badge/License-ISC-blue)](https://opensource.org/licenses/ISC)')
    } else {
        return (' ')
    }
    
};
