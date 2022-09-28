const API_URL = Cypress.env('API_URL');

describe('Exercises page', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.visit('/exercises/create/');
    cy.wait('@getExercises');
  });

  it('shows exercises from the server', () => {
    cy.findByTestId('exercise_list').should('be.visible');

    cy.contains(exercises[0].name);
    cy.contains(exercises[0].name);
  });

  it('navigates to CreateExercise screen', () => {
    cy.findByTestId('create_exercise_btn').click();
    cy.contains('Create Exercise');
  });
});
