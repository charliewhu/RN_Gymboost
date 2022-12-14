//import exercises from '../fixtures/exercises.json';

const API_URL = Cypress.env('API_URL');
const routineName = 'test routine';
const exerciseName = 'Exercise 1';

describe('Creating a Routine, adding an Exercise', () => {
  beforeEach(() => {
    cy.routineIntercepts();

    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.visit('/routines/');
    cy.wait('@getRoutines');
    cy.wait('@getRoutineExercises');
  });

  it('can create', () => {
    cy.findByTestId('createRoutineBtn').click();

    cy.findByTestId('nameInput').type(routineName);

    cy.intercept('POST', `${API_URL}/routines/`, {
      id: 3,
      name: routineName,
    }).as('postRoutine');
    cy.findByTestId('submitBtn').click();

    cy.url().should('include', 'routines/3');

    cy.get('[role="heading"]').contains(routineName);

    cy.findByTestId('addExerciseBtn').click();

    cy.url().should('include', 'routines/3/add_exercise');
    cy.wait('@getExercises');

    cy.findAllByTestId('addExerciseToWorkoutBtn').should('have.length', 0);

    cy.intercept('POST', `${API_URL}/routineexercises/`, {
      id: 3,
      routine: 3,
      exercise: 1,
      name: exerciseName,
    }).as('postRoutineExercise');

    cy.findAllByTestId('addExerciseToRoutineBtn').first().click();
    cy.wait('@postRoutineExercise').its('request.body').should('deep.equal', {
      routine: 3,
      exercise: 1,
    });

    cy.url().should('include', 'routines/3');
    cy.contains(exerciseName);
  });
});
