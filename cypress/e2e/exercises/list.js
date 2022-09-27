describe('Listing exercises', () => {
  it.skip('shows exercises from the server', () => {
    const sushiPlace = 'Sushi Place';
    const pizzaPlace = 'Pizza Place';

    cy.intercept('GET', 'https://api.outsidein.dev/*/exercises', [
      {id: 1, name: sushiPlace},
      {id: 2, name: pizzaPlace},
    ]);

    cy.visit('/');
    cy.contains(sushiPlace);
    cy.contains(pizzaPlace);
  });
});

describe('testing matcher', () => {
  it('matches based on testid', () => {
    cy.visit('/');
    cy.findByTestID('mainView');
  });
});
