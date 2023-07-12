class LoginPage {
    getLogoText(){
        cy.get('.login_logo').then(function(ele) {
            ele.text()
        })
        return true
    }
    getUsernameInputBar(){
        return cy.get('#user-name')
    }
    typePassword(password){
        this.getPasswordInputBar().then(function(ele) {
            cy.get(ele).type(password)
        })
    }
    getPasswordInputBar(){
        return cy.get('#password')
    }
    getLoginButton(){
        return cy.get('#login-button')
    }
    
}

export default LoginPage;