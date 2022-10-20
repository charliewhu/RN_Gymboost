import exercises from '../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');
const weight = '100';
const reps = '8';
const rir = '2';

describe('Creating a workout, adding an Exercise, adding Sets', () => {
  beforeEach(() => {
    cy.workoutIntercepts();

    cy.intercept('POST', `${API_URL}/workouts/`, {
      id: 3,
      created_on: '2022-09-13T10:49:07.982317Z',
    }).as('postWorkout');

    cy.intercept('POST', `${API_URL}/workoutexercises/`, {
      id: 3,
      workout: 3,
      exercise: 1,
      name: 'exercise1',
    }).as('postWorkoutExercise');

    cy.intercept('POST', `${API_URL}/workoutexercisesets/`, {
      workout_exercise: 3,
      weight: weight,
      reps: reps,
      rir: rir,
    }).as('postWorkoutExerciseSet');

    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.visit('/workouts/');
    cy.wait('@getWorkouts');
    cy.wait('@getWorkoutExercises');
  });

  it('can create', () => {
    cy.findByTestId('createWorkoutBtn').click();
    cy.wait('@postWorkout');

    // assert redirect to url with id from responses

    // assert no existing WorkoutExercises
    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 0);

    cy.findByTestId('addExerciseBtn').click();

    // assert redirect to add_exercise url
    cy.url().should('include', 'workouts/3/add_exercise');
    cy.wait('@getExercises');

    cy.findAllByTestId('addExerciseToRoutineBtn').should('have.length', 0);

    cy.findAllByTestId('addExerciseToWorkoutBtn').first().click();
    cy.wait('@postWorkoutExercise').its('request.body').should('deep.equal', {
      workout: 3,
      exercise: 1,
    });

    // assert exercise is on WorkoutExercise list
    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 1);
    cy.contains(exercises[0].name);

    cy.findAllByTestId('workout_exercise_list_item').click();

    // assert url should have workoutId/exercises/workoutExerciseId
    cy.url().should('include', 'workouts/3/exercises/3');

    // assert no sets exist
    cy.findAllByTestId('workout_exercise_set_list_item').should(
      'have.length',
      0,
    );

    // input set info
    cy.findByTestId('actionBtn').click();
    cy.findByTestId('addSetBtn').click();
    cy.findByTestId('weightInput').type(weight);
    cy.findByTestId('repsInput').type(reps);
    cy.findByTestId('rirInput').type(rir);
    cy.findByTestId('submitBtn').click();

    cy.wait('@postWorkoutExerciseSet')
      .its('request.body')
      .should('deep.equal', {
        workout_exercise: 3,
        weight: weight,
        reps: reps,
        rir: rir,
      });

    // assert set shows in list
    cy.findAllByTestId('workout_exercise_set_list_item').should(
      'have.length',
      1,
    );

    cy.findByTestId('weightInput').should('have.value', '');
    cy.findByTestId('repsInput').should('have.value', '');
    cy.findByTestId('rirInput').should('have.value', '');
  });
});
