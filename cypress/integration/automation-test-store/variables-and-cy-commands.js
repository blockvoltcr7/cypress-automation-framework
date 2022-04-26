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

    it.only("Validate properties of the Contact Us Page", () => {
        

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')


        //use cypress commands and chaining (checking for multiple elements)

        //find the contact form, check if it has 'contact us form' then find the field
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain','First name')

        //Jqquery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text()
            expect(firstNameText).to.contain('First name')

            //Embeded commands (closure)
            cy.get('#field_11').then(fnText => {
            cy.log(fnText.text())
            cy.log(fnText)
        })
        })

      

    });  


})