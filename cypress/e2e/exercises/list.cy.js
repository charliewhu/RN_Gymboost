const API_URL = Cypress.env('API_URL');

describe('Exercise List', () => {
  it('shows exercises from the server', () => {
    const exercise1 = 'Ex1';
    const exercise2 = 'Ex2';

    cy.intercept('GET', `${API_URL}/exercises/`, [
      {id: 1, name: exercise1},
      {id: 2, name: exercise2},
    ]).as('getExercises');

    cy.visit('/exercises/');
    cy.wait('@getExercises');

    cy.findByTestId('exercise_list').should('be.visible');

    cy.contains(exercise1);
    cy.contains(exercise2);
  });
});
