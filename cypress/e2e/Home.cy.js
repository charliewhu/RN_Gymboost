import exercises from '../../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('says Home', () => {
    cy.contains('Gymboost Home');
  });

  it('navigates to CreateExercise screen', () => {
    cy.findByTestId('goto_exercises_screen').click();
    cy.contains('Exercises');
    cy.url().should('include', 'exercises');
  });
});
