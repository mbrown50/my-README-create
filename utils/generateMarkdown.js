// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
   return 'text for badge look up online';
  }
  else {
    return '';
  }
}
// https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // same, lookup and put text of link to license
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # License
  ${renderLicenseBadge(data.license)} 

  ## Description
  ${data.description}

  ## Installation

  ## Testing

`;
}

module.exports = generateMarkdown; // function need to match name
