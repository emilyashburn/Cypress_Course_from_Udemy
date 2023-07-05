/*
The following code was created by me while walking through the video tutorials (author: Rahul Shetty) on Udemy.
Some code here is found exactly as it is in the Udemy course.
*/

describe('Practice Suite', function(){
    /*
    it('Radio Button Example', function(){  
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
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
    */
    /*
    it('Checkbox Example', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
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
    */
    /*
    it('Dropdown Example', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('fieldset').contains('Dropdown Example').as('dropdownSection');
        cy.get('@dropdownSection').find('~ select[id="dropdown-class-example"]').select('option1').should('have.value', 'option1');
    })
    */
    /*
    it('Dynamic Dropdown Example', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('fieldset').contains('Suggession Class Example').as('dynamicDropdownSection');
        cy.get('@dynamicDropdownSection').find('~ input').type('united');
        cy.get('.ui-menu-item').contains('USA').click();
    })
    */
    /*
    it('Visible/Invisible Textbox Example', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
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
    */
    /*
    it('Pop-up Examples', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

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
    */
    it('Open New Tab Example', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        
        //Navigating a new tab or new window is not supported with Cypress to prevent 'flaky code', so let's delete the "target" attribute.
        //Deleting the "target" attribute will allow us to navigate to the desired link on the same tab/window.
        cy.get('#opentab').invoke('removeAttr', 'target').click()
    })
})