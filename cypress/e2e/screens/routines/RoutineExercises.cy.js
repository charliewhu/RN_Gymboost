import routineexercises from '../../../fixtures/routineexercises.json';

const API_URL = Cypress.env('API_URL');
const routineName = 'test routine';
const selector = '[aria-label="Go back"]';

describe('WorkoutExercises screen', () => {
  beforeEach(() => {
    cy.routineIntercepts();

    cy.visit('/routines/1/');
    cy.wait('@getRoutines');
    cy.wait('@getRoutineExercises');
  });

  it('shows routineexercises from the server', () => {
    cy.findByTestId('routine_exercise_list').should('be.visible');

    cy.contains(routineexercises[0].name);
    cy.contains(routineexercises[1].name);
  });

  it('doesnt call API or show workoutexercises from the server if Routine doesnt have RoutineExercises', () => {
    cy.visit('/workouts/2/');
    cy.get('@getRoutineExercises.all').should('have.length', 1);

    cy.findAllByTestId('routine_exercise_list_item').should('have.length', 0);
  });

  it('navigates to Exercise create page', () => {
    cy.findByTestId('addExerciseBtn').click();

    // assert redirect to add_exercise url
    cy.url().should('include', 'routines/1/add_exercise');

    cy.findByTestId('create_exercise_btn').click();
    cy.contains('Create Exercise');
    cy.url().should('include', 'routines/1/add_exercise/create');

    // back button goes back to Exercises list for adding to Routine
    cy.get(selector).first().click({force: true});
    cy.url().should('include', 'routines/1/add_exercise');
  });

  it('navigates back to RoutinesScreen if just created', () => {
    // case where we go
    // Routines -> RoutineCreate -> RoutineExercises
    // navigates back to RoutineCreate from RoutineExercises
    // we want to go back to Routines
    cy.visit('/routines/');
    cy.findByTestId('createRoutineBtn').click();

    cy.findByTestId('nameInput').type(routineName);

    cy.intercept('POST', `${API_URL}/routines/`, {
      id: 3,
      name: routineName,
    }).as('postRoutine');
    cy.findByTestId('submitBtn').click();

    cy.url().should('include', 'routines/3');

    cy.get(selector).first().click({force: true});

    cy.url().should('eq', 'http://localhost:19006/routines/');
  });

  it('can be deleted', () => {
    cy.intercept('DELETE', `${API_URL}/routineexercises/1/`, {}).as(
      'deleteRoutineExercise',
    );

    cy.findAllByTestId('deleteRoutineExerciseBtn').first().click();
    cy.wait('@deleteRoutineExercise');

    cy.findAllByTestId('routine_exercise_list_item').should('have.length', 1);
  });
});
