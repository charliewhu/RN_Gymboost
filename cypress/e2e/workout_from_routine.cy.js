import routines from '../fixtures/routines.json';

const API_URL = Cypress.env('API_URL');

describe('Creating a Routine, starting a Workout with it', () => {
  beforeEach(() => {
    cy.routineIntercepts();
    cy.workoutIntercepts();

    // want to run initial dispatch
    cy.visit('/workouts/');
    cy.wait('@getWorkouts');
    cy.wait('@getWorkoutExercises');
    cy.wait('@getWorkoutExerciseSets');

    cy.visit('/routines/');
    cy.wait('@getRoutines');
    cy.wait('@getRoutineExercises');
  });

  it('can create', () => {
    cy.intercept('POST', `${API_URL}/routines/2/workout/`, {
      id: 3,
      created_on: '2022-09-05T09:32:00.993378Z',
      routine: 1,
      name: routines[0].name,
    }).as('postRoutineWorkout');

    cy.findAllByTestId('startWorkoutBtn').first().click();

    // should post the RoutineExercise then fetch the new WorkoutExercises
    cy.wait('@postRoutineWorkout');
    cy.wait('@getWorkoutExercises');

    // assert on WorkoutExercises Screen
    cy.url().should('include', 'workouts/3');
    cy.get('[role="heading"]').contains(routines[0].name);

    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 2);
  });
});
