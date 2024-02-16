import fs from "fs";
import path from 'path';
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";

// array of questions for user
const questions = [
    "Project Title", 
    "Description", 
    "Installation Instructions", 
    "Usage Information", 
    "Contribution Guidelines", 
    "Test Instructions", 
    "Choose License", 
    "Enter GitHub Username", 
    "Enter Email Address"
];

// function to take user inputs
var userInput = (questions) => {
    console.log("Welcome to Readmegician - Let's start the magic!")
    inquirer
    .prompt([
      {    
        type: 'input',
        message: questions[0],
        name: 'title',
      },
      {
        type: 'input',
        message: questions[1],
        name: 'description'
      },
      {    
        type: 'input',
        message: questions[2],
        name: 'installation',
      },
      {    
        type: 'input',
        message: questions[3],
        name: 'usage',
      },
      {    
        type: 'input',
        message: questions[4],
        name: 'contribution',
      },
      {    
        type: 'input',
        message: questions[5],
        name: 'test',
      },
      {    
        type: 'list',
        message: questions[6],
        choices: [
            'Apache-2.0', 
            'GPL-3.0', 
            'MIT', 
            'BSD-2-Clause', 
            'BSD 3-Clause', 
            'BSL-1.0', 
            'CC0-1.0l', 
            'EPL-2.0',
            'AGPL-3.0',
            'GPL-2.0',
            'LGPL-2.1',
            'MPL-2.0',
            'Unlicense'
        ],
        name: 'license',
      },
      {    
        type: 'input',
        message: questions[7],
        name: 'github',
      },
      {    
        type: 'input',
        message: questions[8],
        name: 'email',
      }
    ])
    .then((answers) => {
      console.log(answers.title)
      console.log(answers.description)
      console.log(answers.installation)
      console.log(answers.usage)
      console.log(answers.contribution)
      console.log(answers.test)
      console.log(answers.license)
      console.log(answers.github)
      console.log(answers.email)
    })
    .catch((error) => {
      if (error.isTtyError) {
        console.log(error)
      } else {
        console.log(error)
      }
    });
}
userInput(questions);
// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();