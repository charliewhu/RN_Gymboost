const API_URL = Cypress.env('API_URL');

import workoutexercises from '../../fixtures/workoutexercises.json';
import workoutexercisesets from '../../fixtures/workoutexercisesets.json';
import workouts from '../../fixtures/workouts.json';

describe('Home page', () => {
  beforeEach(() => {
    cy.workoutIntercepts();

    cy.visit('/');
    cy.wait('@getWorkouts');
    cy.wait('@getWorkoutExercises');
    cy.wait('@getWorkoutExerciseSets');
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
      cy.findByTestId('totalWorkouts').contains(workouts.length);
    });

    it('shows total sets', () => {
      cy.findByTestId('totalSets').contains(2);
    });

    it('shows total Sets in past week', () => {
      // Need to add a WorkoutExerciseSet to a Workout
      // That occurs within past week

      workouts.push({
        id: 3,
        created_on: new Date().toISOString(),
      });

      workoutexercises.push({id: 3, workout: 3});
      workoutexercisesets.push({id: 3, workout_exercise: 3});

      cy.intercept('GET', `${API_URL}/workouts/`, workouts).as('getWorkouts');
      cy.intercept('GET', `${API_URL}/workoutexercises/`, workoutexercises).as(
        'getWorkoutExercises',
      );
      cy.intercept(
        'GET',
        `${API_URL}/workoutexercisesets/`,
        workoutexercisesets,
      ).as('getWorkoutExerciseSets');

      cy.visit('/');
      cy.wait('@getWorkouts');
      cy.wait('@getWorkoutExercises');
      cy.wait('@getWorkoutExerciseSets');

      cy.findByTestId('totalWeekSets').contains(1);
    });
  });
});
