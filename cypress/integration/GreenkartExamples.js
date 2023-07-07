/// <reference types="Cypress"/>
import HomePage from './pageObjects/greenKart/HomePage'
import CartPage from './pageObjects/greenKart/CartPage'
import CountryPage from './pageObjects/greenKart/CountryPage'

// 07/03/2023 - Learning Cypress with Mocha/Chai frameworks
const homePage = new HomePage()
const cartPage = new CartPage()
const countryPage = new CountryPage()

describe('Greenkart Test suite', function() {
    before(function() {
        cy.readFile('cypress/fixtures/greenkartItems.json').then(function(data) {
            this.data = data
        })
    })

    it('Add Item to Cart with Custom Command', function() {
        //Step 1: Navigate to practice website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        //Step 2: Type in product name and add desired product to cart
        cy.get('.search-keyword').type('be').then(function(){
            //Add an item to your cart with a custom command
            cy.addItemToCart('Beans');
        });

        //Step 3: From dataset, add all items to cart with a custom command
        this.data.products.forEach(function(item) {
            cy.addItemToCart(item);
        });
    }) 

    it('Search and Add Item to Cart', function() {
        //Step 1: Navigate to practice website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        //Step 2: Type the string "ca" into the search bar
        homePage.getSearchBar().type('ca').then(function() {
        //Step 3: Verify there are 4 products from the search string "ca"
            homePage.getProducts().find('.product').should('have.length',4);
        })

        //Step 4: Verify if product "Cashew" is available AND contains the 'ADD TO CART' button, then click the button
        homePage.addProductToCart('Cashew')
        
        //Step 5: Verify the product was added to the cart
        homePage.getProducts().find('.product').contains('ADDED');
        //Another verification for the item being added to the cart
        homePage.getItemCountInCart().should('have.text', '1');

        //Step 6: Go to cart and purchase items
        homePage.getCartButton().click();
        cartPage.getProceedToCheckoutButton().click()
        cartPage.getPlaceOrderButton().click()

        //Step 7: Confirm purchase by selecting Country and checking the Terms & Conditions Checkbox
        countryPage.getCountryDropDown().select('United States').should('have.value', 'United States');
        countryPage.getCheckAgreeCheckbox().check().should('be.checked');
        countryPage.getProceedButton().click()
    })
})