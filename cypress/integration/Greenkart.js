/// <reference types="Cypress"/>
import HomePage from './pageObjects/greenKart/HomePage'
import CheckoutPage from './pageObjects/greenKart/CheckoutPage'
import ConfirmCartPurchasePage from './pageObjects/greenKart/ConfirmCartPurchasePage'

//Initialize pageObjects
const homePage = new HomePage()
const checkoutPage = new CheckoutPage()
const confirmCartPurchasePage = new ConfirmCartPurchasePage()

describe('Greenkart Test suite', function() {
    //Test Setup
    beforeEach(function() {
        cy.fixture('greenkartItems.json').then( function(data) {
            this.data = data
        })
    })

    it('Add Items from JSON to Cart and Purchase', function() {
        //Step 1: Navigate to practice website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        //Step 2: Type in product name and add desired product to cart
        homePage.getSearchBar().type('be').then( function() {
            //Add an item to your cart with a custom command
            cy.wait(1000)       //There's no loading symbol after updating the search bar, so this cy.wait is necessary for this case.
            cy.addItemToCart('Beans');
        });

        //Step 3: From dataset, add all items to cart with a custom command
        this.data.products.forEach(function(item) {
            cy.addItemToCart(item);
        });

        //Step 4: Go to cart and add up the total cost of all items
        homePage.getCartButton().click();
        checkoutPage.getProceedToCheckoutButton().click()

        //Step 5: Validate the total cost
        checkoutPage.calculatePriceOfItems(342)
    }) 

    it('Search and Add Item to Cart', () => {
        //Step 1: Navigate to practice website
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        //Step 2: Type the string "ca" into the search bar
        homePage.getSearchBar().type('ca').then( function() {
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
        checkoutPage.getProceedToCheckoutButton().click()
        checkoutPage.getPlaceOrderButton().click()

        //Step 7: Confirm purchase by selecting Country and checking the Terms & Conditions Checkbox
        confirmCartPurchasePage.getCountryDropDown().select('United States').should('have.value', 'United States');
        confirmCartPurchasePage.getCheckAgreeCheckbox().check().should('be.checked');
        confirmCartPurchasePage.getProceedButton().click()
    })
})