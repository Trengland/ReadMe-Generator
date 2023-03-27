// TODO: Include packages needed for this application - DONE (installed inquirer and npm)
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
// TODO: Create a function to write README file

// function generateREADME ({title, motivation, solution, knowledge, pizazz, challenges, future, screencast}) {
//     return`
//         The title of my application: ${title}

//         My motivation for building this application: ${motivation}

//         My appllication solves the following problems: ${solution}

//         While creating this application, this is what I learned: ${knowledge}

//         These are the reasons my application stands out: ${pizazz}

//         Here are the challenges I faced while creating this application: ${challenges}

//         Plans for future implementation consist of: ${future}

//         Enjoy this screencast of my working command line application: ${screencast}
//     `
// }

// TODO: Create an array of questions/objects for user input
 const questions = [
    {
        type: 'input',
        message: 'What is the title of your new application?',
        name: 'title',
    },

    {
        type: 'input',
        message: 'Please write a short description of your project:',
        name: 'description',
    },

    {
        type: 'input',
        message: 'What command should be used to install necessary dependencies:',
        name: 'installation',
    },

    {
        type: 'input',
        message: 'What command should be used to run Tests?',
        name: 'tests',
    },

    {
        type: 'input',
        message: 'What are the usage guidelines for this repository?',
        name: 'usage',
    },

    {
        type: 'input',
        message: 'How can someone contribute to this project?',
        name: 'contributing',
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },

    {
        type: 'input',
        message: 'What is your GitHub username',
        name: 'github',
    },

    {
        type: 'list',
        message: 'What license does this project have?',
        name: 'license',
        choices: ['MIT', 'Apache', 'none']
    }

]

// .then((answers) => {
//     let readmeFile = generateREADME(answers);
//     fs.writeFile('README.md', readmeFile, (err) => {
//         err ? console.log(err) : console.log("README File Created succesfully!");
//     })
// })

function writeToFile (fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses)=> {
        console.log('generating your README File...')
        writeToFile("README.md", generateMarkdown({
            ...responses
        }))
    })
}

// Function call to initialize app
init();
