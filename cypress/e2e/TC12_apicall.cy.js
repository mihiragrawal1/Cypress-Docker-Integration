describe("Demonstrate api call using cypress",()=>{

    it("Get api call",()=>{

        cy.request({
            method:"GET",   //get call
            url:"https://reqres.in/api/users",

        }).then((response)=>{
            expect(response.status).eq(200)  //validate get request status code
        })

    })


    it("Post api call(add a user)",()=>{
        
        cy.api({
            method:"POST",  //post call
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then((res)=>{
            expect(res.status).eq(201)   //validate status code for post request(201)
            expect(res.body).to.have.property('name',"morpheus");  //aplying assertion to validate api response was expecting this three property in body
            expect(res.body).to.have.property('job',"leader");
            expect(res.body).to.have.property('id');


        })
    


})
})