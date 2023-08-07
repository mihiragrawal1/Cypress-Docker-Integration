describe('Dealing with different alert box in cypress',()=>{

    it("Normal alert box",()=>{

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[onclick="myFunctionAlert()"]').click()   //cypress by deafult close the alert box by clicking ok
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('I am an alert box!');   //  -----    validating text inside the alert box through assertion
         })
    })



    it("Confirm box ",()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[onclick="myFunctionConfirm()"]').click()
        cy.on('window:confirm',()=>false)           //writing such function we can click on cancel button in confirm box
        cy.get('#demo').should('be.visible')
        cy.get('#demo').should('have.text','You pressed Cancel!')    //validate cancel click using asssertion

    })

})