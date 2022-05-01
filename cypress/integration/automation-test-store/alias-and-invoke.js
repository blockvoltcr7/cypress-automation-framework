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

    it("challenge", () => {
        
        cy.visit('http://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length',8)
        cy.get('@productThumbnail').find('.productcart').invoke('attr','title').should('include','Add to Cart') //find attribute that contains the word title
        cy.get('@productThumbnail').find('.productcart').should('have.length',8)


    });

 
    it.only("Calculate totals of normal and sale products", () => {
        
        cy.visit('http://automationteststore.com/')
        //iterate over the elements and add total cost of each items when adding all of them up.
        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail')

        cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {

            
            cy.log("index "+ index + " text "+ $el.text())


        })


    });

 


})