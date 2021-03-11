// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

// add function to present manager questions
function addManagerInfo() {
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

            // below is a checkbox 
            {
                type: 'checkbox',
                message: 'Which type of team member would you like to add?',
                name: 'membertype',
                choices: ["Engineer', 'Intern', 'I don't want to add any more team members"],
            }
        ]);

    if (choices === "Engineer") {
        addEngineer();
    } else if (choices === "Intern"){
        addIntern();
    } else return;
};

//add function to present engineer questions
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?",
            },
            {
                type: 'input',
                name: 'engineerID',
                message: "What is the Engineer's Employee ID?",
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the Engineer's email address?",
            },
            {
                type: 'input',
                name: 'engineerPhone',
                message: "What is the Engineer's phone number?",
            },

            // below is a checkbox 
            {
                type: 'checkbox',
                message: 'Which type of team member would you like to add?',
                name: 'membertype',
                choices: ["Engineer', 'Intern', 'I don't want to add any more team members"],
            }
        ]);
    if (choices === "Engineer") {
        addEngineer();
    } else if (choices === "Intern"){
        addIntern();
    } else return;
};

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'internName',
                message: "What is the Intern's name?",
            },
            {
                type: 'input',
                name: 'internID',
                message: "What is the Intern's Employee ID?",
            },
            {
                type: 'input',
                name: 'internEmail',
                message: "What is the Intern's email address?",
            },
            {
                type: 'input',
                name: 'internPhone',
                message: "What is the Intern's phone number?",
            },

            // below is a checkbox 
            {
                type: 'checkbox',
                message: 'Which type of team member would you like to add?',
                name: 'membertype',
                choices: ["Engineer', 'Intern', 'I don't want to add any more team members"],
            }
        ]);
        if (choices === "Engineer") {
            addEngineer();
        } else if (choices === "Intern"){
            addIntern();
        } else return;
}


function renderFile(data) {
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
}
