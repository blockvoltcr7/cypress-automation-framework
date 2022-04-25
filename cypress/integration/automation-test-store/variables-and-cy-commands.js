/// <reference types="Cypress" />

describe("Variables verfied, cypress commands and jquery commands", () => {

    it("navigating to specific product pages", () => {
        

        cy.visit('http://automationteststore.com/')

        // const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
        // makeupLink.click()

        // const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
        // skincareLink.click()

        //recommended approach to
        cy.get("a[href*='product/category&path=']").contains("Skincare").click()
        cy.get("a[href*='product/category&path=']").contains("Makeup").click()

        cy.get('h1 .maintext').then(($headerText) => {
            const headerText = $headerText.text();
            cy.log("found header text: "+ headerText)
            expect(headerText).to.eq('Makeup')
        })

    });



})