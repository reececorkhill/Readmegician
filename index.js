import fs, { writeFileSync } from "fs";
import inquirer from "inquirer";
import util from "util";

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
    "Choose Badge",
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
        type: 'list',
        message: questions[7],
        choices: [
          'Apache_2.0-blue', 
          'GPLv3-blue', 
          'MIT-yellow', 
          'BSD_2--Clause-orange', 
          'BSD_3--Clause-blue', 
          'Boost_1.0-lightblue', 
          'CC0_1.0-lightgrey', 
          'EPL_2.0-red',
          'AGPL_v3-blue',
          'GPLv2-blue',
          'LGPL_v2.1-blue',
          'MPL_2.0-brightgreen',
          'Unlicense-blue'
        ],
        name: 'badge',
      },
      {    
        type: 'input',
        message: questions[8],
        name: 'github',
      },
      {    
        type: 'input',
        message: questions[9],
        name: 'email',
      },
    ]);
};

// function to write README file
const writeToFile = (answers) => 
`
# ${answers.title}

[![License](https://img.shields.io/badge/License-${answers.badge})](https://opensource.org/licenses/${answers.license})

## Description
${answers.description}
     
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}
     
## Usage
${answers.usage}
     
## License

This application is covered by the ${answers.license} License.
     
## Contributing
${answers.contributing}
     
## Tests
${answers.tests}

## questions

For any questions relating to this project, please contact:

<a href="https://github.com/${answers.github}">${answers.github}</a> | <a href="mailto:${answers.email}">${answers.email}</a>`;

userInput(questions)
    .then((answers) => writeFileAsync('README.md', writeToFile(answers)))
    .then(() => console.log('README Successfully Generated!'))
    .catch((err) => console.error(err));