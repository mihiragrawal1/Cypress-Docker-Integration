describe('Demostrate use of cypress file-upload',()=>{

    it('Cypress file upload example 1',()=>{
        //to use  file upload in cypress first install file upload package and import it in support/command.js file.

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('walpaper.jpg')  //attachFile can be used to upload a file using cypress scripts
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('be.visible')
        cy.get('#uploaded-files').contains('walpaper.jpg')  //assertion to validate the file is uploaded or not
        
    })


    it('Cypress file upload example 2(rename a file while uploadng)',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'walpaper.jpg',fileName:'upload.png'})  //using this we can rename a file while uploading
        cy.wait(2000)
        cy.get('#file-submit').click()
        cy.get('#uploaded-files').should('be.visible')
        cy.get('#uploaded-files').contains('upload.png') 


    })


    it('Cypress file upload example 3(drag n drop)',()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        
        cy.get('#drag-drop-upload').attachFile('walpaper.jpg',{subjectType:'drag-n-drop'})  //using this we perform drag n drop action to uploade a file
        cy.get('#drag-drop-upload').contains('walpaper.jpg')
    })
})

