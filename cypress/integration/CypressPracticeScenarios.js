/// <reference types="cypress-iframe"/>
/// <reference types="cypress-wait-until"/>

import 'cypress-iframe'
import 'cypress-wait-until'
/*
The following code was created by me while walking through the video tutorials (author: Rahul Shetty) on Udemy.
Some code here is found exactly as it is in the Udemy course.
*/

describe('Practice Suite', function(){
    before(function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    })

    it('Radio Button Example', function(){  
        cy.get('fieldset').contains('Radio Button Example').as('radioButtonSection');
        
        //Select the 1st radio button
        cy.get('[value="radio1"]').click().should('be.checked');
        cy.get('[value="radio2"]').should('not.be.checked');
        cy.get('[value="radio3"]').should('not.be.checked');
        //Select the 2nd radio button
        cy.get('[value="radio2"]').click().should('be.checked');
        cy.get('[value="radio1"]').should('not.be.checked');
        cy.get('[value="radio3"]').should('not.be.checked');
        //Select the 3rd radio button
        cy.get('[value="radio3"]').click().should('be.checked');
        cy.get('[value="radio1"]').should('not.be.checked');
        cy.get('[value="radio2"]').should('not.be.checked');
    })
    
    it('Checkbox Example', function(){
        cy.get('fieldset').contains('Checkbox Example').as('checkboxSection');

        //First technique
        //Check all 3 checkboxes
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption1"]').check().should('be.checked');
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption2"]').check().should('be.checked');
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption3"]').check().should('be.checked');
        //Uncheck all 3 checkboxes
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption1"]').uncheck().should('not.be.checked');
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption2"]').uncheck().should('not.be.checked');
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption3"]').uncheck().should('not.be.checked');
        
        //Second technique
        //Check all 3 checkboxes
        cy.get('@checkboxSection').find('~ label input').check(['option1','option2','option3']).should('be.checked');
        //Uncheck all 3 checkboxes
        cy.get('@checkboxSection').find('~ label input').uncheck(['option1','option2','option3']).should('not.be.checked');

    })
    
    it('Dropdown Example', function(){
        cy.get('fieldset').contains('Dropdown Example').as('dropdownSection');
        cy.get('@dropdownSection').find('~ select[id="dropdown-class-example"]').select('option1').should('have.value', 'option1');
    })
    
    it('Dynamic Dropdown Example', function() {
        cy.get('fieldset').contains('Suggession Class Example').as('dynamicDropdownSection');
        cy.get('@dynamicDropdownSection').find('~ input').type('united');
        cy.get('.ui-menu-item').contains('USA').click();
    })
    
    it('Visible/Invisible Textbox Example', function(){
        cy.get('input[name="show-hide"]').as('houdini');

        //By default, the textbox should be visible
        cy.get('@houdini').should('be.visible');
        //Click the hide button and verify the textbox is not visible
        cy.get('#hide-textbox').click();
        cy.get('@houdini').should('not.be.visible');
        //Click the show button and verify the textbox is visible
        cy.get('#show-textbox').click();
        cy.get('@houdini').should('be.visible');
    })
    
    it('Pop-up Examples', function(){
        //Alert and Confirm pop-ups are automatically handled by Cypress.
        //Capture the Alert pop-up to compare the confirm text to a string
        cy.get('[id="name"]').type('Emily');
        cy.get('#alertbtn').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello Emily, share this practice page and share your knowledge')
        })
        //Capture the Confirm pop-up to compare the confirm text to a string
        cy.get('[id="name"]').type('Emily');
        cy.get('#confirmbtn').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello Emily, Are you sure you want to confirm?')
        })
    })
    
    it('Open New Tab Example', function(){
        //Navigate to new website
        cy.visit('https://parabank.parasoft.com/parabank/lookup.htm')
        //Since we visit the rahulshetty website before each test, and I want to use a different website for this test,
        // we have to redefine the origin in order to test on it.
        cy.origin('https://parabank.parasoft.com/parabank/lookup.htm', function(){
            //Visit different page
            cy.get('.leftmenu li a').contains('Admin Page').click()
            //Verify the URL contains the expected string. There's a session num attached to the url, so we want to verify
            // the text is contained within that long, unique URL.
            cy.url().should('contain', 'https://parabank.parasoft.com/parabank/admin.htm')
            cy.go('back')
            //Verify the URL has changed back to the previous one.
            cy.url().should('contain', 'https://parabank.parasoft.com/parabank/lookup.htm')    
        });
    })
    
    it('Table Example', function(){
        //Navigate to new website
        cy.visit('https://petstore.octoperf.com/actions/Catalog.action')
        //Since we visit the rahulshetty website before each test, and I want to use a different website for this test,
        // we have to redefine the origin in order to test on it.
        cy.origin('https://petstore.octoperf.com/actions/Catalog.action', function(){
            //Search for "Manx"
            cy.get('#SearchContent form input[type="text"]').type('Manx')
            cy.get('#SearchContent form input[name="searchProducts"]').click()
            
            //Verify we're on the row of Manx, then click the previous previous cell value to go to all Manx available.
            cy.get('tr td:nth-child(3)').invoke('text').then(function(catName) {
                expect(catName).to.be.eq('Manx');
                cy.get('tr td:nth-child(3)').prev().prev().find('a').click()
            })

            //Wait until page is loaded. Page does not display a loading icon for Cypress
            cy.get('h2').should('be.visible').then(function(){
                //Search table for Manx matches
                cy.get('tr td:nth-child(3)').each(($e1, index, $list) => {
                    const text = $e1.text()
                    if(text.includes('Manx'))
                    {
                        //If cat price is equal to $23.50, click add to cart
                        cy.get('tr td:nth-child(3)').eq(index).next().then(price => {
                            if(price.text().includes('$23.50'))
                            {
                                cy.get(price).next().click()
                            }
                        })
                    }
                })
            })
        })
    })
    
    it('Hover Popup Example', function(){
        //Cypress does not handle hover over elements. We can use Jquery to supplement Cypress here.
        cy.get('div .mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include', 'top')
    })
})