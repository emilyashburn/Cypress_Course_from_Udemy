/// <reference types="Cypress"/>
// 07/03/2023 - Learning Cypress with Mocha/Chai frameworks

describe('My First Test Suite', function() {
    //All test cases for this test suite belong in here!
    it('My First Test Case', function() {
        //Test steps for this test case belong in here!!
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //Type the string "ca" into the search bar
        cy.get('.search-keyword').type('ca');
        //Wait for the page to load the changes - hardcoded
        cy.wait(2000);
        //Verify there are 4 products from the search string "ca"
        cy.get('.products').find('.product').should('have.length',4);

        //Click the ADD TO CART button for the 2nd product
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click();
        //Verify the product was added to the cart
        cy.get('.products').find('.product').contains('ADDED')

        //Verify the product "Cashew" contains the 'ADD TO CART' button, then click the button
        cy.xpath('//div[@class="product"][contains(.,"Cashew")]').contains('ADD TO CART').click()

        cy.get('div.cart-info td')
            .contains('Items')
            .find('~ td strong')
            .then(function(numOfItems){
                expect(numOfItems.text()).to.equal('2');
            })        
        })

    })