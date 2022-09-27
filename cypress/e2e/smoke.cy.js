describe('Smoke Test', () => {
  it('can view the home page', () => {
    cy.visit('/');
    cy.contains('Open up App.js to start working on your app!');
  });
});
