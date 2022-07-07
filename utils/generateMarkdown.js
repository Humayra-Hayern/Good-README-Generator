// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return `There was no license selected for this application`;
  } else {
    return `
  This application is covered under the ${license}`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Table of contents
  1. [Description](#description)
  2. [Installation instructions](#installation-instructions)
  3. [Usage information](#usage-information)
  4. [Contributing guidelines](#contributing-guidelines)
  5. [Test instructions](#test-instructions)
  6. [License](#license)
  7. [Questions](#questions)
  ## Description
  ${data.description}
  ## Installation instructions
  ${data.installation}
  ## Usage information 
  ${data.usage}
  ## Contributing guidelines 
  ${data.contributing}
  ## Test instructions
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  If you have any quesitons about the application then please contact me via github or email.
  Github - https://github.com/${data.github}
  Email address - ${data.email}
`;
}

module.exports = generateMarkdown;
