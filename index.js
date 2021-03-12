// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// TODO: Create an array of questions for user input

// add function to present manager questions
const employeeArray = [];

function addPersonelPrompt() {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Which type of team member would you like to add?',
                name: 'membertype',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            },
        ])

        .then((data) => {
            const choices = data.membertype;
            const filename = './teamProfile.html'
            // console.log(choices)
            // choices === "Engineer"
            //     ? addEngineer()
            //     : choices === "Intern"
            //         ? addIntern()
            //         : fs.writeFile(filename,employeeArray,(err) =>
            // err ? console.log(err) : console.log('Success!'))

            switch (choices) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    fs.writeFile(filename,employeeArray,(err) => err ? console.log(err) : console.log('Success!'));

            } 
        })
}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Manager's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Manager's Employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Manager's email address?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "What is the Manager's phone number?",
            },
        ])

        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
            employeeArray.push(manager);
            // console.log(employeeArray);
            addPersonelPrompt();
        })
}

function addEngineer() {
    inquirer
        .prompt([
            // Enter Engineer's information ------------------------
            {
                type: 'input',
                name: 'name',
                message: "What is the Engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Engineer's Employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Engineer's email address?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the Engineer's GitHub username?",
            },
        ])

        .then((data) => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github)
            employeeArray.push(engineer);
            // console.log(employeeArray);
            addPersonelPrompt();
        })
}

function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the Intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the Intern's Employee ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the Intern's email address?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the Intern's school?",
            },
        ])

        .then((data) => {
            const intern = new Intern(data.name, data.id, data.email, data.school)
            employeeArray.push(intern);
            // console.log(employeeArray);
            addPersonelPrompt();
        })
}


//__________ code to start it off

addManager();



//---------code to write the file------------ 
// const filename = `./teamProfile.html`;

// fs.writeFile(filename,
// `
// <!DOCTYPE html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
// <meta http-equiv="X-UA-Compatible" content="IE=edge">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>Document</title>
// </head>
// <body>
// <h1>${data.managerName}
// Manager</h1>
// ${data.managerID}
// ${data.managerEmail}
// ${data.managerPhone}
// </body>
// </html>`,


// (err) =>
// err ? console.log(err) : console.log('Success!')
// )



