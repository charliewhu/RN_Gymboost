const API_URL = Cypress.env('API_URL');

describe('Listing exercises', () => {
  it('shows exercises from the server', () => {
    console.log(API_URL);
    const exercise1 = 'Ex2';
    const exercise2 = 'Ex1';

    cy.intercept('GET', 'https://api.outsidein.dev/*/exercises', [
      {id: 1, name: sushiPlace},
      {id: 2, name: pizzaPlace},
    ]);

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});
