import exercises from '../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');

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

    // assert redirect to url with id from response
    cy.url().should('include', 'workouts/3');

    // assert no existing WorkoutExercises
    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 0);

    cy.findByTestId('addExerciseBtn').click();

    // assert redirect to add_exercise url
    cy.url().should('include', 'workouts/3/add_exercise');
    cy.wait('@getExercises');

    cy.findAllByTestId('add_exercise_to_workout_btn').first().click();
    cy.wait('@postWorkoutExercise').its('request.body').should('deep.equal', {
      workout: 3,
      exercise: 1,
    });

    // assert exercise is on WorkoutExercise list
    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 1);
    cy.contains(exercises[0].name);

    cy.findAllByTestId('workout_exercise_list_item').click();

    // should have workoutId/exercises/workoutExerciseId
    cy.url().should('include', 'workouts/3/exercises/3');

    // TODO
  });
});
