describe('demontrate cypress hooks',()=>{

    //in cypress we have multiple hook such as .only,.skip using this we skip or run only selected scripts
    //test marked as skip will get skipped when we execute the test file,other all test will get execute except test script mark as skip
    //using .only hook we can run specific test from script while execution of test file

    //for example :
    //i have marked test script 1 with .only hook so when file is executed/run only test script 1 will run and give result as test script 2 is skipped and test script 3 is blocked beacuse we have used only hook on test script 1

    it.only('handle dropdowm with cypress example 1',()=>{                    //test script 1

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python')  //we can use select function to select option from dropdown
        cy.get('#dropdowm-menu-2').select('Maven')
        cy.get('#dropdowm-menu-3').select('JQuery')
    })

    it.skip('handle radiobuttons with cypress',()=>{        //test script 2

        cy.visit('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('[value="yellow"]').check()

    })

     

    it("Normal alert box",()=>{        //test script 3

        cy.visit('https://testautomationpractice.blogspot.com/')
        cy.get('[onclick="myFunctionAlert()"]').click()   //cypress by deafult close the alert box by clicking ok
        cy.on('window:alert',(t)=>{
            //assertions
            expect(t).to.contains('I am an alert box!');   //  -----    validating text inside the alert box through assertion
         })
    })
})