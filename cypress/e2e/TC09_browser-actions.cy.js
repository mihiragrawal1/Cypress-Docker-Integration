describe('Demonstrate browser actions in cypress',()=>{

    it('browser actions in cypress(go back)',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target')           
        .click()
        cy.go('back')        //to go back on previous page
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')

    })

    it('browser actions in cypress(go forward)',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target')           
        .click()
        cy.go('back')
        cy.go('forward')        //to go one step forward
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')

    })

    
    it('browser actions in cypress(go forward)',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.wait(2000)
        cy.reload()           //to reload the page                 
    })
             
})