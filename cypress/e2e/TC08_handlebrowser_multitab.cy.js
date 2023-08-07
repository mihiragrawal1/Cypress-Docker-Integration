describe('Handle browser multiple tab with cypress ',()=>{

    it('Handling tabs in cypress example 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target')           //using invoke we can handle new/multiple tab in cypress
        .click()

    })


})