describe('Example test', () => {
  it('loads example.com', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Example Domain');
  });
});