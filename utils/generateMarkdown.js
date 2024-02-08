// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return `https://img.shields.io/badge/License-MIT-yellow.svg`;
  }
  if (license == 'GPL v3') {
    return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
  }
  if (license == 'MPL 2.0') {
    return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
  }
  if (license == 'other') {
    return 'License badge: N/A';
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return `https://opensource.org/licenses/MIT`;
  }
  if (license == 'GPL v3') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  }
  if (license == 'MPL 2.0') {
    return 'https://opensource.org/licenses/MPL-2.0';
  }
  if (license == 'other') {
    return 'License link: N/A';
  }
  else {
    return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let lBadge = renderLicenseBadge(license);

  let lLink = renderLicenseLink(license);

  return `
  
  License: ${license}
  
  Badge: ${lBadge}
  
  Link: ${lLink}
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  // WHEN I click on the links in the Table of Contents
  //THEN I am taken to the corresponding section of the README

  let licenseData = renderLicenseSection(data.license)

  return `
  # ${data.title}

  # Description
  ${data.description}

  ## Table of Contents
  [Description](#description) | [Installation](#installation) | [Usage](#usage) | [License](#license) | [Contributing](#contributing) | [Tests](#tests) | [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${licenseData}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions

  Deployed link: ${data.deployed}

  GitHub username: ${data.username}

  GitHub Repo: htts://github.com/${data.username}

  Additional questions? Email: ${data.email}

`;
}

module.exports = generateMarkdown;
