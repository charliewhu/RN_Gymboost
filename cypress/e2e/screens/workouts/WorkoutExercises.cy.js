import workoutexercises from '../../../fixtures//workoutexercises.json';

const API_URL = Cypress.env('API_URL');

describe('WorkoutExercises screen', () => {
  beforeEach(() => {
    cy.workoutIntercepts();

    cy.visit('/workouts/1/');
    cy.wait('@getWorkouts');
    cy.wait('@getWorkoutExercises');
    cy.wait('@getWorkoutExerciseSets');
  });

  it('shows workoutexercises from the server', () => {
    cy.findByTestId('workout_exercise_list').should('be.visible');

    cy.contains(workoutexercises[0].name);
    cy.contains(workoutexercises[1].name);
  });

  it('doesnt call API or show workoutexercises from the server if workout doesnt have WorkoutExercises', () => {
    cy.visit('/workouts/2/');
    cy.get('@getWorkoutExercises.all').should('have.length', 1);

    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 0);
  });

  it('navigates to Exercise create page', () => {
    cy.findByTestId('addExerciseBtn').click();

    // assert redirect to add_exercise url
    cy.url().should('include', 'workouts/1/add_exercise');

    cy.findByTestId('createExerciseBtn').click();
    cy.contains('Create Exercise');
    cy.url().should('include', 'workouts/1/add_exercise/create');

    const selector = '[aria-label="Go back"]';
    cy.get(selector).first().click({force: true});
    cy.url().should('include', 'workouts/1/add_exercise');
  });

  it('WorkoutExerciseSets can be deleted', () => {
    cy.intercept('DELETE', `${API_URL}/workoutexercises/1/`, {}).as(
      'deleteWorkoutExercise',
    );

    cy.findAllByTestId('deleteWorkoutExerciseBtn').first().click();

    cy.wait('@deleteWorkoutExercise');

    cy.findAllByTestId('workout_exercise_list_item').should('have.length', 1);
  });

  it('shows the count of sets in list item', () => {
    cy.contains('Sets: 2');
  });
});
