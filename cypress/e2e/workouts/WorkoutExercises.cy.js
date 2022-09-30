import workoutexercises from '../../fixtures//workoutexercises.json';

const API_URL = Cypress.env('API_URL');

describe('WorkoutExercises screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/workoutexercises/`, {
      fixture: 'workoutexercises.json',
    }).as('getWorkoutExercises');

    cy.fixture('workoutexercises.json').as('workoutexercises');

    cy.visit('/workoutexercises/1/');
    cy.wait('@getWorkoutExercises');
  });

  it('shows workoutexercises from the server', () => {
    cy.findByTestId('workout_exercise_list').should('be.visible');

    cy.contains(workoutexercises[0].name);
    cy.contains(workoutexercises[1].name);
  });

  it('doesnt show workoutexercises from the server if workout doesnt have WorkoutExercises', () => {
    cy.visit('/workoutexercises/2/');
    cy.wait('@getWorkoutExercises');

    cy.findByTestId('workout_exercise_list').should('be.visible');

    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 0);
  });
});
