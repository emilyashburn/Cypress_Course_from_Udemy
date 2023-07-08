<p align="center">
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"> <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"> <img src="https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white"> <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
</p>

# Cypress Course by Rahul Shetty
Using Rahul Shetty's course via Udemy, I'm learning how to problem-solve automation issues via ``Cypress`` with ``Node.js`` and ``Mocha``.

## Getting Started
Before we can run the tests in this repository, we need to have [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en), and [Cypress](https://www.cypress.io/) installed onto your machine. The IDE I use to create/run this code (and suggest you to install as well) is [Visual Studio Code](https://code.visualstudio.com/).

## Setup & Run Tests
Clone the repository onto your machine and install the dependencies listed in ``package.json`` by copying these steps into your CLI:
```ruby
# Clone this repository
$ gh repo clone emilyashburn/Cypress_Course_from_Udemy

# Move into the cloned repository
$ cd Cypress_Course_from_Udemy

# Install the dependencies
$ npm install

# Run all tests on default settings (headless, Electron browser, all specs, ...)
$ npx cypress run

# ...or...

# Run the tests in 'headed' mode in chrome
$ npx cypress run --headed -b chrome
```
https://github.com/emilyashburn/Cypress_Course_from_Udemy/assets/46406272/0621f2a5-7749-44af-838d-b32c496d9e8f
