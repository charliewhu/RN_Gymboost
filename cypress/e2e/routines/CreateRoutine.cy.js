const API_URL = Cypress.env('API_URL');
const routineName = 'test routine';

describe('Create Routine screen', () => {
  beforeEach(() => {
    cy.intercept('GET', `${API_URL}/routines/`, {
      fixture: 'routines.json',
    }).as('getRoutines');

    cy.intercept('POST', `${API_URL}/routines/`, {
      id: 3,
      name: routineName,
    }).as('postRoutine');

    cy.visit('/routines/create/');
  });

  it('navigates back to Routines screen', () => {
    const selector = '[aria-label="Go back"]';
    cy.get(selector).click();

    cy.contains('Routines');
    cy.url().should('eq', 'http://localhost:19006/routines');
  });

  it('has a nameInput field', () => {
    cy.findByTestId('nameInput-outlined');
  });

  it('has a submit button', () => {
    cy.findByTestId('routineSubmitBtn');
  });

  it('clicking submit button with invalid form doesnt navigate', () => {
    cy.findByTestId('routineSubmitBtn').click();
    cy.contains('Create routine');
    cy.url().should('eq', 'http://localhost:19006/routines/create/');
  });

  it('clicking submit button with valid form redirects to routines page and shows new routine in list', () => {
    cy.findByTestId('nameInput-outlined').type(routineName);
    cy.findByTestId('routineSubmitBtn').click();

    cy.wait('@postRoutine').its('request.body').should('deep.equal', {
      name: routineName,
    });

    cy.contains('routines');
    cy.url().should('eq', 'http://localhost:19006/routines');

    cy.contains(routineName);
  });
});
