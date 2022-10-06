import routines from '../../../fixtures/routines.json';

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
});
