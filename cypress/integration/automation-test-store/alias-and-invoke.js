/// <reference types="Cypress" />

describe("Alias and Invoke", () => {



    it("Validate a specific hair care product", () => {
        
        cy.visit('http://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        //when using aliases you must use @ symbol to reference it
        cy.get('@productThumbnail').its('length').should('be.gt',5) //checking if the length is grater than 5
        cy.get('@productThumbnail').should('include','Seaweed Conditioner')
    });

    it.only("challenge", () => {
        
        cy.visit('http://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.thumbnail').should('have.length', 8)
        //get the number of products with class name = thumbnail


    });

 



})