import LoginPage from "./pageObjects/swagLabs/LoginPage"

const loginPage = new LoginPage();

describe('Swag Labs Test Suite', () => {

    it('Login as Standard User', () => {
        //Step 1: Navigate to Website
        cy.visit('https://www.saucedemo.com/')

        //Step 2: Input username/password to login
        loginPage.getLogoText()
    })

})