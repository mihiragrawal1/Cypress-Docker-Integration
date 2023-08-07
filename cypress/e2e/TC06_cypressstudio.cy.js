describe('Demonstrate use of cypress studio',()=>{

    //write test script using cypress studio
    it("Cypress studio example 1",()=>{
        cy.visit("https://practicetestautomation.com/practice-test-login/")   //visit website url
        /* ==== Generated with Cypress Studio ==== */
        cy.get('#username').clear('s');
        cy.get('#username').type('student');
        cy.get('#password').clear('P');
        cy.get('#password').type('Password123');
        cy.get('#submit').click();
        cy.get('.wp-block-button__link').should('be.visible');
        cy.get('.post-title').should('be.visible');
        /* ==== End Cypress Studio ==== */
        cy.url().should('eq','https://practicetestautomation.com/logged-in-successfully/')   //this assertion is added manually not using cypress studio
    })
    
    
    
    //Complete form automation test script with Cypress studio
    
    /* ==== Test Created with Cypress Studio ==== */
    it('Cypress studio example 2', function() {
      /* ==== Generated with Cypress Studio ==== */
      cy.visit('https://itera-qa.azurewebsites.net/home/automation');
      cy.get('#name').clear('m');
      cy.get('#name').type('mihir');
      cy.get('#phone').clear('8');
      cy.get('#phone').type('8888777766');
      cy.get('#email').clear('a');
      cy.get('#email').type('abc@gmail.com');
      cy.get('#password').clear('1');
      cy.get('#password').type('123456789');
      cy.get('#address').click();
      cy.get('#male').check();
      cy.get('#monday').check();
      cy.get('#thursday').check();
      cy.get('#sunday').check();
      cy.get('.custom-select').select('4');
      cy.get(':nth-child(1) > :nth-child(2) > .custom-control-label').click();
      cy.get('#\\31 year').check();
      cy.get(':nth-child(8) > .custom-control-label').click();
      cy.get(':nth-child(8) > .custom-control-label').click();
      /* ==== End Cypress Studio ==== */
    });
    
    })