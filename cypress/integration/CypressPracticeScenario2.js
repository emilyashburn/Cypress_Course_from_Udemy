// This example needed to be put in a separate file because
// the cy.origin() command does not support custom commands like cy.frameLoaded();
describe('iFrame test suite', function() {

    beforeEach(function(){
        cy.readFile('cypress/fixtures/formInfo.json').then(function(data) {
            this.data = data
        })
    })

    it('Fill Form with Provided Data Example', function(){
        cy.visit('https://selectorshub.com/xpath-practice-page/')
        cy.get('#userId').invoke('removeAttr', 'readOnly').type(this.data.email)
        cy.get('#pass').type(this.data.pass)
        cy.get('[name="company"]').eq(0).type(this.data.company)
        cy.get('[name="mobile number"]').eq(0).type(this.data.phone)
    })

    it('iFrame Example', function(){
        cy.visit('https://webdriveruniversity.com/IFrame/index.html');
        //Load the iframe information
        cy.frameLoaded();
        //Now we have switched to focus on iframe, let's click the Mentorship button
        cy.iframe().find('a[href*="products"]').click()
        //Once the iframe has loaded the new page, let's verify there are 7 products (that are NOT special offers) to choose from
        cy.wait(1000)
        cy.iframe().find('[id*="container-product"]').should('have.length', 7);
    })
    
})
    