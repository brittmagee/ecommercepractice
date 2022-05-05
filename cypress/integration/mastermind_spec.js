describe('Mastermind Tests', function(){
    it('Visit the homepage', function(){
    //Arrange - setup initial app state
        //visit homepage
        cy.visit('/')
    //Act - take an action
        //query to find an element and interact with that element
        cy.get('.icon-accessories').click()
        cy.get('.product').click()
        cy.contains('Add to cart').click()
        // cy.get('.menu-function-item').click()
    })
})