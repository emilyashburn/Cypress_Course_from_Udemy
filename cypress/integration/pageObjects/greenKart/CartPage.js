class CartPage {
    getProceedToCheckoutButton(){
        return cy.get('button').contains('PROCEED TO CHECKOUT')
    }
    getPlaceOrderButton(){
        return cy.get('button').contains('Place Order')
    }
}

export default CartPage;