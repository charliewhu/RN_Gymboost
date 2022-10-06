import routineexercises from '../../../fixtures/routineexercises.json';

const API_URL = Cypress.env('API_URL');

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

    const selector = '[aria-label="Go back"]';
    cy.get(selector).first().click({force: true});
    cy.url().should('include', 'routines/1/add_exercise');
  });

  it('RoutineExercises can be deleted', () => {
    cy.intercept('DELETE', `${API_URL}/routineexercises/1/`, {}).as(
      'deleteRoutineExercise',
    );

    cy.findAllByTestId('deleteRoutineExerciseBtn').first().click();

    cy.wait('@deleteRoutineExercise');

    cy.findAllByTestId('routine_exercise_list_item').should('have.length', 1);
  });
});
