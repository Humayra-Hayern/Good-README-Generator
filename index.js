// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of options for the "select a license" question
const licenses = [
  {
    name: "Apache License 2.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-Apache_2.0-blue.svg",
      licenseUrl: "https://opensource.org/licenses/Apache-2.0",
    },
  },
  {
    name: "GNU General Public License v3.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-GPLv3-blue.svg",
      licenseUrl: "https://www.gnu.org/licenses/gpl-3.0",
    },
  },
  {
    name: "MIT License",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-MIT-yellow.svg",
      licenseUrl: "https://opensource.org/licenses/MIT",
    },
  },
  {
    name: 'BSD 2-Clause "Simplified" License',
    value: {
      badgeUrl: "https://img.shields.io/badge/License-BSD_2--Clause-orange.svg",
      licenseUrl: "https://opensource.org/licenses/BSD-2-Clause",
    },
  },
  {
    name: 'BSD 3-Clause "New" or "Revised" License',
    value: {
      badgeUrl: "https://img.shields.io/badge/License-BSD_3--Clause-blue.svg",
      licenseUrl: "(https://opensource.org/licenses/BSD-3-Clause",
    },
  },
  {
    name: "Boost Software License 1.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg",
      licenseUrl: "https://www.boost.org/LICENSE_1_0.txt",
    },
  },
  {
    name: "Creative Commons Zero v1.0 Universal",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg",
      licenseUrl: "http://creativecommons.org/publicdomain/zero/1.0/",
    },
  },
  {
    name: "Eclipse Public License 1.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-EPL_1.0-red.svg",
      licenseUrl: "https://opensource.org/licenses/EPL-1.0",
    },
  },
  {
    name: "GNU Affero General Public License v3.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-AGPL_v3-blue.svg",
      licenseUrl: "https://www.gnu.org/licenses/agpl-3.0",
    },
  },
  {
    name: "GNU General Public License v2.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-GPL_v2-blue.svg",
      licenseUrl: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html",
    },
  },
  {
    name: "Mozilla Public License 2.0",
    value: {
      badgeUrl: "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg",
      licenseUrl: "https://opensource.org/licenses/MPL-2.0",
    },
  },
  {
    name: "The Unlicense",
    value: {
      badgeUrl: "https://img.shields.io/badge/license-Unlicense-blue.svg",
      licenseUrl: "http://unlicense.org/",
    },
  },
  {
    name: "None",
    value: "None",
  },
];

// An array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of the project:",
    validate: (input) => {
      if (!input) {
        return "A title is required";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Enter the description of your project:",
    validate: (input) => {
      if (!input) {
        return "A description is required";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "Enter the installation instructions:",
    validate: (input) => {
      if (!input) {
        return "Installation instructions are required";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Enter the usage information:",
    validate: (input) => {
      if (!input) {
        return "Usage information is required";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message: "Enter the contribution guidelines:",
    validate: (input) => {
      if (!input) {
        return "Contribution guidelines are required";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Test instructions:",
    validate: (input) => {
      if (!input) {
        return "Test instructions are required";
      } else {
        return true;
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license:",
    choices: licenses,
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github username:",
    validate: (input) => {
      if (!input) {
        return "A github username is required";
      } else {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (input) => {
      if (!input) {
        return "A valid email address is required";
      } else {
        return true;
      }
    },
  },
];

// A function to write README file
function writeToFile(fileName, data) {
  console.log(data);
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("success")
  );
}

// A function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
