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
    cy.findByTestId('nameInput-outlined');
  });

  it('has a submit button', () => {
    cy.findByTestId('exerciseSubmitBtn');
  });

  it.skip('clicking submit button with invalid form doesnt navigate');

  it('clicking submit button with valid form redirects to Exercises page', () => {
    cy.findByTestId('nameInput-outlined').type('Exercise');
    cy.findByTestId('exerciseSubmitBtn').click();

    cy.contains('Exercises');
    cy.url().should('eq', 'http://localhost:19006/exercises');
  });
});
