// This example needed to be put in a separate file because
// the cy.origin() command does not support custom commands like cy.frameLoaded();
describe('iFrame test suite', function() {
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
    