describe("Login Page ", () => {
    beforeEach(() => {
      cy.visit('/')          //vist the url
    });
  
    it("should successsfully log in", () => {
      cy.get('button').eq(7).click()
      cy.get('input').eq(0).type('3@gmail.com')   //type the user name in the field
      cy.get('input').eq(1).type('123456') 
      cy.get('button').eq(8).click()  //click the button    
    })
    
  
  });