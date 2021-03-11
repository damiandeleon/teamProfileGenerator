// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

// add function to present manager questions

function addPersonelPrompt (){
    inquirer
        .prompt([
            {
                type: 'checkbox',
                message: 'Which type of team member would you like to add?',
                name: 'membertype',
                choices: ["Engineer", "Intern", "I don't want to add any more team members"],
            },
        ])

        .then((data) => {
            const choices = data.membertype;
            console.log(choices)
            choices === "Engineer"
            ? addEngineer()
            : choices === "Intern"
                ? addIntern()
                : console.log("Thank you!  All entries complete"),
                (err) =>
            err ? console.log(err) : console.log('Success!')
            
        })
}

function addManager() {
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
    ])

    .then((data) => {
        const filename = `teamProfile.html`;
    
        fs.writeFile(filename,
        `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>${data.managerName}
Manager</h1>
${data.managerID}
${data.managerEmail}
${data.managerPhone}
</body>
</html>`,
        

        (err) =>
        err ? console.log(err) : console.log('Success!')
    )
    addPersonelPrompt();
})
}

function addEngineer(){
inquirer
    .prompt([
        // Enter Engineer's information ------------------------
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
            name: 'engineerGitHub',
            message: "What is the Engineer's GitHub username?",
        },
    ])

    .then((data) => {
        const filename = `teamProfile.html`;
    
        fs.appendFile(filename,
//put code in to add card to the html file in a specific div tag with a class in it 
        `
<h1>${data.engineerName}
Engineer</h1>
${data.engineerID}
${data.engineerEmail}
https://github.com/${data.engineerGitHub}
</body>
</html>`,
        

        (err) =>
        err ? console.log(err) : console.log('Success!')
    )
addPersonelPrompt();
})
}
// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'managerName',
//             message: "What is the Manager's name?",
//         },
//         {
//             type: 'input',
//             name: 'managerID',
//             message: "What is the Manager's Employee ID?",
//         },
//         {
//             type: 'input',
//             name: 'managerEmail',
//             message: "What is the Manager's email address?",
//         },
//         {
//             type: 'input',
//             name: 'managerPhone',
//             message: "What is the Manager's phone number?",
//         },
//         {
//             type: 'checkbox',
//             message: 'Which type of team member would you like to add?',
//             name: 'membertype',
//             choices: ["Engineer", "Intern", "I don't want to add any more team members"],
//         },
//         // Enter Engineer's information ------------------------
//         {
//             type: 'input',
//             name: 'engineerName',
//             message: "What is the Engineer's name?",
//         },
//         {
//             type: 'input',
//             name: 'engineerID',
//             message: "What is the Engineer's Employee ID?",
//         },
//         {
//             type: 'input',
//             name: 'engineerEmail',
//             message: "What is the Engineer's email address?",
//         },
//         {
//             type: 'input',
//             name: 'engineerPhone',
//             message: "What is the Engineer's phone number?",
//         },

        
//         // Enter Intern's information ------------------------
//         {
//             type: 'input',
//             name: 'internName',
//             message: "What is the Intern's name?",
//         },
//         {
//             type: 'input',
//             name: 'internID',
//             message: "What is the Intern's Employee ID?",
//         },
//         {
//             type: 'input',
//             name: 'internEmail',
//             message: "What is the Intern's email address?",
//         },
//         {
//             type: 'input',
//             name: 'internPhone',
//             message: "What is the Intern's phone number?",
//         },
//         {
//             type: 'checkbox',
//             message: 'Which type of team member would you like to add?',
//             name: 'membertype',
//             choices: ["Engineer', 'Intern', 'I don't want to add any more team members"],
//         }
//     ])

//     .then((data) => {
//         const filename = `teamProfile.html`;
    
//         fs.writeFile(filename,
//         `
//         <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
// <h1>${data.managerName}
// Manager</h1>
// ${data.managerID}
// ${data.managerEmail}
// ${data.managerPhone}
// </body>
// </html>`,
        

//         (err) =>
//         err ? console.log(err) : console.log('Success!')
//     )
// addPersonelPrompt();
//})



//__________ code to start it off

addManager();

 

