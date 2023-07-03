/// <reference types="Cypress"/>
// 07/03/2023 - Learning Cypress with Mocha/Chai frameworks

describe('My First Test Suite', function() {
    //All test cases for this test suite belong in here!
    it('My First Test Case', function() {
        //Test steps for this test case belong in here!!
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        //cy.get('div[class="product"]').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);
        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        //cy.get('.products').find('.product').contains('ADDED')

        cy.xpath('//div[@class="product"][contains(.,"Cashew")]').contains('ADD TO CART').click()
            
        })

    })