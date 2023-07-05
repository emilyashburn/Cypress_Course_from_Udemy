
describe('Practice Suite', function(){
    it('Radio Button Example', function(){  
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('fieldset').contains('Radio Button Example').as('radioButtonSection');
        //Select the 3 radio buttons from top to bottom
        cy.get('@radioButtonSection').find('~ label input[value="radio1"]').click();
        cy.get('@radioButtonSection').find('~ label input[value="radio2"]').click();
        cy.get('@radioButtonSection').find('~ label input[value="radio3"]').click();
    })
    it('Checkbox Example', function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('fieldset').contains('Checkbox Example').as('checkboxSection');
        //Check all 3 checkboxes
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption1"]').check();
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption2"]').check();
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption3"]').check();
        //Uncheck all 3 checkboxes
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption1"]').uncheck();
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption2"]').uncheck();
        cy.get('@checkboxSection').find('~ label input[id="checkBoxOption3"]').uncheck();
    })
})