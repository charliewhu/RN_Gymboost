import exercises from '../../../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');

describe('Exercises screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.fixture('exercises.json').as('exercises');

    cy.visit('/exercises/');
    cy.wait('@getExercises');
  });

  it('shows exercises from the server', () => {
    cy.findByTestId('exercise_list').should('be.visible');

    cy.contains(exercises[0].name);
    cy.contains(exercises[1].name);
  });

  it('navigates to CreateExercise screen', () => {
    cy.findByTestId('create_exercise_btn').click();
    cy.contains('Create Exercise');
    cy.url().should('include', 'exercises/create');
  });

  it('doesnt show add_exercise_to_workout_btn', () => {
    cy.findAllByTestId('add_exercise_to_workout_btn').should('have.length', 0);
  });
});
