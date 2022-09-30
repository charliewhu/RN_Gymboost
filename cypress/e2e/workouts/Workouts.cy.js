import workouts from '../../fixtures/workouts.json';

const API_URL = Cypress.env('API_URL');

describe('Workouts screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/workouts/`, {
      fixture: 'workouts.json',
    }).as('getWorkouts');

    cy.fixture('workouts.json').as('workouts');

    cy.visit('/workouts/');
    cy.wait('@getWorkouts');
  });

  it('shows workouts from the server', () => {
    cy.findByTestId('workout_list').should('be.visible');

    cy.contains(workouts[0].created_on);
    cy.contains(workouts[1].created_on);
  });
});
