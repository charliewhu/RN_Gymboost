import exercises from '../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');

describe('Creating a Routine, adding an Exercise', () => {
  beforeEach(() => {
    cy.workoutIntercepts();

    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.visit('/routines/');
    cy.wait('@getRoutines');
    cy.wait('@getRoutineExercises');
  });

  it('can create', () => {
    // RoutinesScreen
    // Click addRoutineBtn
    // Type routine name
    // Click submitBtn
    // Navigate to RoutineExercisesScreen
    // Header should equal name of Routine
    // Click addRoutineExerciseBtn
    // Will be on ExercisesScreen (back button should go to RoutineExercisesScreen, like with workouts/id/add_exercise)
    // Click addExerciseToRoutineBtn
    // Navigate to RoutineExercisesScreen
    // Exercise should be in the list
  });
});
