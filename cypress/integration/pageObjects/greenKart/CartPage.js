class CartPage {
    getProceedToCheckoutButton(){
        return cy.get('button').contains('PROCEED TO CHECKOUT')
    }
    getPlaceOrderButton(){
        return cy.get('button').contains('Place Order')
    }
    calculatePriceOfItems(totalCost){
        var total = 0
        cy.get('#productCartTables > tbody > tr > td:nth-child(5) > p').each((ele, index, list) => {
            total = total + Number(ele.text())
            cy.log('this is the total so far..' + total)
        })
        .then(function() {
            cy.log(total)
            expect(total).to.be.equal(totalCost)
        })
        return Number(total)
    }
}

export default CartPage;