import routines from '../../../fixtures/routines.json';

const API_URL = Cypress.env('API_URL');

describe('Routines screen', () => {
  beforeEach(() => {
    cy.routineIntercepts();

    cy.visit('/routines/');
    cy.wait('@getRoutines');
    cy.wait('@getRoutineExercises');
  });

  it('shows routines from the server', () => {
    cy.findByTestId('routine_list').should('be.visible');

    cy.contains(routines[0].name);
    cy.contains(routines[1].name);
  });

  it('navigates to CreateRoutine screen', () => {
    cy.findByTestId('createRoutineBtn').click();
    cy.contains('Create Routine');
    cy.url().should('include', 'routines/create');
  });

  it('navigates to RoutineExercises screen', () => {
    cy.findAllByTestId('routine_list_item').first().click();
    cy.get('[role="heading"]').contains(routines[0].name);
    cy.url().should('include', 'routines/1');
  });

  it('can be deleted', () => {
    cy.intercept('DELETE', `${API_URL}/routines/1/`, {}).as('deleteRoutine');

    cy.findAllByTestId('deleteRoutineBtn').first().click();
    cy.wait('@deleteRoutine');

    cy.findAllByTestId('routine_list_item').should('have.length', 1);
  });
});
