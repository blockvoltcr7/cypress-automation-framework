/// <reference types="Cypress" />

describe("test contact us form via webdriverUni", () => {

    it("should be able to submit a successful submission via contact us form", () => {
        
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type('Sami')
        cy.get('[name="last_name"]').type('Sabir-Idrissi')
        cy.get('[name="email"]').type('samisabir212@gmail.com')
        cy.get('textarea.feedback-input').type('Cypress is super awesome and extremely fast compared to Selenium with Java')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
       
    });

    it.only("should not be able to submit a successful submission via contact us form as all fields are required", () => {
        
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('#contact-us').click()
        cy.get('[name="first_name"]').type('Sami')
        cy.get('[name="last_name"]').type('Sabir-Idrissi')
        cy.get('textarea.feedback-input').type('Cypress is super awesome and extremely fast compared to Selenium with Java')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
        cy.get('body').contains('Error: Invalid email address')

    });

})