//***** Greenkart Commands *****
Cypress.Commands.add('addItemToCart', (itemName) => {
    //Find all products, and search for specific item
    cy.get('.product .product-name:visible').each((el, index, list) => {
        //If product matches search, add it to the cart once.
        if(el.text().includes(itemName)){
            cy.log(el.text())
            cy.get('.product:visible').eq(index).contains('ADD TO CART').click().contains('ADDED')
        }
    })
})

//***** Other Commands *****