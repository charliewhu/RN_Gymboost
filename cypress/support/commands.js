// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

const API_URL = Cypress.env('API_URL');

Cypress.Commands.add('workoutIntercepts', () => {
  cy.intercept('GET', `${API_URL}/workouts/`, {
    fixture: 'workouts.json',
  }).as('getWorkouts');

  cy.intercept('GET', `${API_URL}/workoutexercises/`, {
    fixture: 'workoutexercises.json',
  }).as('getWorkoutExercises');

  cy.intercept('GET', `${API_URL}/workoutexercisesets/`, {
    fixture: 'workoutexercisesets.json',
  }).as('getWorkoutExerciseSets');
});

Cypress.Commands.add('routineIntercepts', () => {
  cy.intercept('GET', `${API_URL}/routines/`, {
    fixture: 'routines.json',
  }).as('getRoutines');

  cy.intercept('GET', `${API_URL}/routineexercises/`, {
    fixture: 'routineexercises.json',
  }).as('getRoutineExercises');
});
