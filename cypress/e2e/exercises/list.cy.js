const API_URL = Cypress.env('API_URL');

describe('Exercise List', () => {
  it('shows exercises from the server', () => {
    console.log(API_URL);
    const exercise1 = 'Ex2';
    const exercise2 = 'Ex1';

    cy.intercept('GET', `${API_URL}/exercises/`, [
      {id: 1, name: exercise1},
      {id: 2, name: exercise2},
    ]);

    cy.visit('/exercises/');
    cy.contains(exercise1);
    cy.contains(exercise2);
  });
});
