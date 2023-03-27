// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
  return `* [License](#license)`
  }
  return '';
}



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
This Project is Licensed under the ${license} license.`;
  }
  return '';
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command: 

\`\`\`
${data.installation}
\`\`\`

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To perform Tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

## Questions

For any questions about this project, please contact me at ${data.email}. To view more of my work, you can visit my GitHub here [${data.github}](https://www.github.com/${data.github}/).
`;
}

module.exports = generateMarkdown;
