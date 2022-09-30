//import workoutexercises from '../../fixtures//workoutexercises.json';

const API_URL = Cypress.env('API_URL');

describe('WorkoutExercises screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/workoutexercises/`, {
      fixture: 'workoutexercises.json',
    }).as('getWorkoutExercises');

    cy.fixture('workoutexercises.json').as('workoutexercises');

    cy.visit('/workoutexercises/');
    cy.wait('@getWorkoutExercises');
  });
});
