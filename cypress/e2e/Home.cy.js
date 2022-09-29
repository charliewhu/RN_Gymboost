describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('says Home', () => {
    cy.contains('Gymboost Home');
  });

  it('navigates to CreateExercise screen', () => {
    cy.findByTestId('exercises_tab').click();
    cy.contains('Exercises');
    cy.url().should('include', 'exercises');
  });
});
