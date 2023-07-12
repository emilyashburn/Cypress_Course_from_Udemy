import LoginPage from "./pageObjects/swagLabs/LoginPage"

const loginPage = new LoginPage();

describe('Swag Labs Test Suite', () => {

    it('Login as Standard User', () => {
        //Step 1: Navigate to Website
        cy.visit('https://www.saucedemo.com/')
        loginPage.getLogoText()

        //Step 2: Input username/password to login
        cy.fixture('/swagLabs/standardUserInfo.json').then(function(standardUser){
            loginPage.typePassword(standardUser.password)
        })
        loginPage.getUsernameInputBar().then(function(ele) {
            cy.get(ele).type(this.standardUser.username)
        })
        
        
        cy.wait(3000)
    })

})