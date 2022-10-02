import workoutexercisesets from '../../../fixtures//workoutexercisesets.json';

describe('WorkoutExercises screen', () => {
  beforeEach(() => {
    cy.workoutIntercepts();

    cy.visit('/workouts/1/exercises/1');
    cy.wait('@getWorkouts');
    cy.wait('@getWorkoutExercises');
    cy.wait('@getWorkoutExerciseSets');
  });

  it('navigates back to WorkoutExercises screen', () => {
    cy.findByTestId('goBackBtn').click();

    cy.url().should('eq', 'http://localhost:19006/workouts/1');
  });

  it('shows workoutexercises from the server', () => {
    cy.findByTestId('workout_exercise_set_list').should('be.visible');

    cy.contains(workoutexercisesets[0].weight);
    cy.contains(workoutexercisesets[1].weight);
  });

  it('doesnt call API or show workoutexercises from the server if WorkoutExercise doesnt have WorkoutExerciseSets', () => {
    cy.visit('/workouts/1/exercises/2');
    cy.get('@getWorkoutExerciseSets.all').should('have.length', 1);

    cy.findAllByTestId('workout_exercise_set_list_item').should(
      'have.length',
      0,
    );
  });
});
