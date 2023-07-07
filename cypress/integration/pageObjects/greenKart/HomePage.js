class HomePage {
    getSearchBar(){
        return cy.get('.search-keyword')
    }
    getProducts(){
        return cy.get('.products')
    }
    getItemCountInCart(){
        return cy.get('div.cart-info td').contains('Items').find('~ td strong')
    }
    getCartButton(){
        return cy.get('.cart-icon > img')
    }
    addProductToCart(productName){
        this.getProducts().find('.product').each((el, index, list) => {
            if(el.find('.product-name').text().includes(productName)){
                cy.get(el).contains('ADD TO CART').click();
            }
        })
    }
}
export default HomePage;