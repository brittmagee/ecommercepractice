describe('My First Test', function (){
    it('Visit the kitchen sink', function (){
        // expect(true).to.equal(true)
        //Arrange - setup initial app state
            //visit a page
            cy.visit('https://example.cypress.io')
        //Act - take an action
            //query to find an element and interact with that element
            cy.contains('type').click()
        //Assert - make an assertion
            //make an assertion about changes in app
            cy.url()
            .should('include', '/commands/actions')

            cy.get('.action-email')
                .type('fake@email.com')
                .should('have.value', 'fake@email.com')
    })
})