describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('says Home', () => {
    cy.contains('Gymboost Home');
  });

  it('navigates to Exercise tab', () => {
    cy.findByTestId('exercises_tab').click();
    cy.contains('Exercises');
    cy.url().should('include', 'exercises');
  });

  it('navigates to Routine tab', () => {
    cy.findByTestId('routines_tab').click();
    cy.contains('Routines');
    cy.url().should('include', 'routines');
  });
});
