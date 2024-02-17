import fs, { writeFileSync } from "fs";
import path from "path";
import inquirer from "inquirer";
import util from "util";
import generateMarkdown from "./utils/generateMarkdown.js";

const writeFileAsync = util.promisify(fs.writeFile);

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
const userInput = (questions) => {
    console.log("Welcome to Readmegician - Let's start the magic!")
    return inquirer.prompt([
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
        name: 'contributing',
      },
      {    
        type: 'input',
        message: questions[5],
        name: 'tests',
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
      },
    ]);
};

// function to write README file
const writeToFile = (answers) => 
`
# ${answers.title}
     
## Description
${answers.description}
     
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)

## Installation
${answers.installation}
     
## Usage
${answers.usage}
     
## License
${answers.license}
     
## Contributing
${answers.contributing}
     
## Tests
${answers.tests}`;

userInput(questions)
    .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
    .then(() => console.log('README Successfully Generated!'))
    .catch((err) => console.error(err));