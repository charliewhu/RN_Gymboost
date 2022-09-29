const API_URL = Cypress.env('API_URL');

describe('Exercises page', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.visit('/exercises/create/');
  });

  it('navigates back to Exercises screen', () => {
    const selector = '[aria-label="Go back"]';
    cy.get(selector).click();

    cy.contains('Exercises');
    cy.url().should('eq', 'http://localhost:19006/exercises');
  });

  it('has a nameInput field', () => {
    const exerciseName = 'Exercise Name';
    cy.findByTestId('nameInput').type(exerciseName);
  });
});
