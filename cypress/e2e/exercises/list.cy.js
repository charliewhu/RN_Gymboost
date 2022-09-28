import exercises from '../../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');

describe('Exercises page', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.fixture('exercises.json').as('exercises');
  });

  it('shows exercises from the server', () => {
    cy.visit('/exercises/');
    cy.wait('@getExercises');

    cy.findByTestId('exercise_list').should('be.visible');

    cy.contains(exercises[0].name);
    cy.contains(exercises[0].name);
  });
});
