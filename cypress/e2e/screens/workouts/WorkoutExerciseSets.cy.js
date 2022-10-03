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

  describe('form validation', () => {
    it('doesnt submit form if form is blank', () => {
      cy.findByTestId('submitBtn').click();

      cy.get('@postWorkoutExerciseSet.all').should('have.length', 0);
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        0,
      );
    });

    it('doesnt submit if form fields contain non-numeric', () => {
      cy.findByTestId('weightInput-outlined').type(100);
      cy.findByTestId('repsInput-outlined').type(10);
      cy.findByTestId('rirInput-outlined').type(3);

      cy.findByTestId('submitBtn').click();

      cy.get('@postWorkoutExerciseSet.all').should('have.length', 0);
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        0,
      );
    });

    it('adds Set to the list after submit', () => {
      cy.findByTestId('weightInput-outlined').type(100);
      cy.findByTestId('repsInput-outlined').type(10);
      cy.findByTestId('rirInput-outlined').type(3);
      cy.findByTestId('submitBtn').click();

      cy.wait('@postWorkoutExerciseSet');

      // assert set shows in list
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        1,
      );
    });

    it('clears the form after submit', () => {
      cy.findByTestId('weightInput-outlined').type(100);
      cy.findByTestId('repsInput-outlined').type(10);
      cy.findByTestId('rirInput-outlined').type(3);
      cy.findByTestId('submitBtn').click();

      cy.wait('@postWorkoutExerciseSet');

      cy.findByTestId('weightInput-outlined').should('have.value', '');
      cy.findByTestId('repsInput-outlined').should('have.value', '');
      cy.findByTestId('rirInput-outlined').should('have.value', '');
    });
  });
});
