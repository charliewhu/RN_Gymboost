import workouts from '../../fixtures/workouts.json';

const API_URL = Cypress.env('API_URL');

describe('Workouts screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/workouts/`, {
      fixture: 'workouts.json',
    }).as('getWorkouts');

    cy.intercept('GET', `${API_URL}/workoutexercises/`, {
      fixture: 'workoutexercises.json',
    }).as('getWorkoutExercises');

    cy.fixture('workouts.json').as('workouts');

    cy.visit('/workouts/');
    cy.wait('@getWorkouts');
  });

  it('shows workouts from the server', () => {
    cy.findByTestId('workout_list').should('be.visible');

    cy.contains(new Date(Date.parse(workouts[0].created_on)).toUTCString());
    cy.contains(new Date(Date.parse(workouts[1].created_on)).toUTCString());
  });

  it('navigates to a Workout', () => {
    cy.findAllByTestId('workout_list_item').first().click();

    cy.url().should('eq', 'http://localhost:19006/workouts/1');
  });
});
