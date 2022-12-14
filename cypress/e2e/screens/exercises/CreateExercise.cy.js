const API_URL = Cypress.env('API_URL');
const exerciseName = 'test exercise';

describe('Create Exercise screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getExercises');

    cy.intercept('POST', `${API_URL}/exercises/`, {
      id: 3,
      name: exerciseName,
    }).as('postExercise');

    cy.visit('/exercises/create/');
  });

  it('navigates back to Exercises screen', () => {
    const selector = '[aria-label="Go back"]';
    cy.get(selector).click();

    cy.contains('Exercises');
    cy.url().should('eq', 'http://localhost:19006/exercises');
  });

  it('has a nameInput field', () => {
    cy.findByTestId('nameInput');
  });

  it('has a submit button', () => {
    cy.findByTestId('submitBtn');
  });

  it('clicking submit button with invalid form doesnt navigate', () => {
    cy.findByTestId('submitBtn').click({force: true});
    cy.contains('Create Exercise');
    cy.url().should('eq', 'http://localhost:19006/exercises/create/');
  });

  it('clicking submit button with valid form redirects to Exercises page and shows new Exercise in list', () => {
    cy.findByTestId('nameInput').type(exerciseName);
    cy.findByTestId('submitBtn').click();

    cy.wait('@postExercise').its('request.body').should('deep.equal', {
      name: exerciseName,
    });

    cy.contains('Exercises');
    cy.url().should('eq', 'http://localhost:19006/exercises');

    cy.contains(exerciseName);
  });

  it('creating an Exercise while adding Exercise to Routine should still show addExerciseToRoutineBtn', () => {
    cy.routineIntercepts();

    cy.visit('/routines/1/');
    cy.wait('@getRoutines');
    cy.wait('@getRoutineExercises');

    cy.findByTestId('addExerciseBtn').click();
    cy.findByTestId('createExerciseBtn').click();

    cy.findByTestId('nameInput').type(exerciseName);
    cy.findByTestId('submitBtn').click();
    cy.wait('@postExercise');

    cy.findAllByTestId('addExerciseToRoutineBtn').should('exist');
  });
});
