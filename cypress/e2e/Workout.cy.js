import exercises from '../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');

describe('Creating a workout, adding an Exercise, adding Sets', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/workouts/`, {
      fixture: 'workouts.json',
    }).as('getWorkouts');

    cy.intercept('POST', `${API_URL}/workouts/`, {
      id: 3,
      created_on: '2022-09-13T10:49:07.982317Z',
    }).as('postWorkout');

    cy.intercept('GET', `${API_URL}/workoutexercises/`, {
      fixture: 'workoutexercises.json',
    }).as('getWorkoutExercises');

    cy.intercept('GET', `${API_URL}/workoutexercises/`, {
      id: 3,
      workout: 3,
      exercise: 1,
    }).as('getWorkoutExercises');

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
    cy.wait('@postWorkoutExercise');

    // assert exercise is on WorkoutExercise list
    cy.contains(exercises[0].name);
    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 1);

    cy.findAllByTestId('workout_exercise_list_item').click();

    cy.url().should('include', 'workouts/3/exercises/1');
  });
});
