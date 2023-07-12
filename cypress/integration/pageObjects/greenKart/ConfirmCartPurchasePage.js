class CountryPage {
    getCountryDropDown(){
        return cy.get('label ~ div select')
    }
    getCheckAgreeCheckbox(){
        return cy.get('.chkAgree')
    }
    getProceedButton(){
        return cy.get('button').contains('Proceed')
    }
}

export default CountryPage;