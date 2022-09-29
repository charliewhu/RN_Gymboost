import routines from '../../fixtures/routines.json';

const API_URL = Cypress.env('API_URL');

describe('Routines screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/exercises/`, {
      fixture: 'exercises.json',
    }).as('getRoutines');

    cy.fixture('routines.json').as('routines');

    cy.visit('/routines/');
    cy.wait('@getRoutines');
  });

  it('shows routines from the server', () => {
    cy.findByTestId('exercise_list').should('be.visible');

    cy.contains(routines[0].name);
    cy.contains(routines[0].name);
  });
});
