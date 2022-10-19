const API_URL = Cypress.env('API_URL');

import workouts from '../../../fixtures/workouts.json';

describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/workouts/`, {
      fixture: 'workouts.json',
    }).as('getWorkouts');

    cy.visit('/');
  });

  it('says Home', () => {
    cy.contains('Gymboost');
  });

  it('navigates to Exercise tab', () => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');
    cy.findByTestId('exercises_tab').click();
    cy.contains('Exercises');
    cy.url().should('include', 'exercises');
  });

  it('navigates to Routine tab', () => {
    cy.intercept('GET', `${API_URL}/routines/`, {
      fixture: 'routines.json',
    }).as('getRoutines');

    cy.findByTestId('routines_tab').click();
    cy.contains('Routines');
    cy.url().should('include', 'routines');
  });

  it('navigates to Workout tab', () => {
    cy.intercept('GET', `${API_URL}/workoutexercises/`, {
      fixture: 'workoutexercises.json',
    }).as('getWorkoutExercises');

    cy.findByTestId('workouts_tab').click();
    cy.contains('Workouts');
    cy.url().should('include', 'workouts');
  });

  describe('analytics', () => {
    it('shows total workouts', () => {
      cy.findByTestId('totalWorkoutCounter').should(
        'have.value',
        workouts.length,
      );
    });
  });
});
