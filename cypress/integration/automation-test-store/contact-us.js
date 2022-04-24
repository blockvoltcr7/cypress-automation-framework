/// <reference types="Cypress" />

describe("Test contact us via automation test store", () => {

    it("", () => {
        
        cy.visit('http://automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Sami')
        cy.get('#ContactUsFrm_email').type('samisabir212@gmail.com')
        cy.get('#ContactUsFrm_email').should('have.attr','name','email')
        cy.get('#ContactUsFrm_enquiry').type('hello sami')
        cy.get('.col-md-6 > .btn').click()
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    });



})