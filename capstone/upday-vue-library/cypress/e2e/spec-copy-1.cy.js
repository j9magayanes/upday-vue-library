it('should handle uncaught exceptions without stopping the test', () => {
  // This will cause an uncaught exception
  cy.get('#nonexistent-element');
});


describe('AdComponent', () => {
  it('renders Web Ad', () => {
    cy.visit('http://localhost:6006/?path=/story/components-adcomponent--web&globals=backgrounds.value:!hex(F8F8F8)')
 // Change the URL to your application's URL

    // Mount the AdComponent with the Web args
   
    

    // Your assertions here
    cy.get('.ad-block') // Replace with the actual selector used in your component
      .should('be.visible')
      .and('have.attr', 'title', 'web');
  });

})