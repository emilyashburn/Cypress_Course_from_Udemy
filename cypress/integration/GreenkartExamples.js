/// <reference types="Cypress"/>
// 07/03/2023 - Learning Cypress with Mocha/Chai frameworks

describe('Greenkart Test suite', function() {
    
    it('Search and Add Item to Cart', function() {
        //Step 1: Navigate to practice website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        //Step 2: Type the string "ca" into the search bar
        cy.get('.search-keyword').type('ca');
        //Wait for the page to load the changes - hardcoded
        cy.wait(2000);

        //Verify there are 4 products from the search string "ca"
        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length',4);

        //Step 3: Verify the product "Cashew" contains the 'ADD TO CART' button, then click the button
        cy.xpath('//div[@class="product"][contains(.,"Cashew")]').contains('ADD TO CART').click();
        //Verify the product was added to the cart
        cy.get('@productLocator').find('.product').contains('ADDED');
        //Another verification for the item being added to the cart
        cy.get('div.cart-info td')
            .contains('Items')
            .find('~ td strong')
            .should('have.text', '1');

        //Step 4: Go to cart to purchase items
        cy.get('.cart-icon > img').click();
        cy.get('button').contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()
        })

    it('Add Item to Cart with Custom Command', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('be');
        //Wait for the page to load the changes - hardcoded
        cy.wait(2000);
        //Add 2 different items to your cart
        cy.addItemToCart('Beetroot');
        cy.addItemToCart('Strawberry');
    })
})