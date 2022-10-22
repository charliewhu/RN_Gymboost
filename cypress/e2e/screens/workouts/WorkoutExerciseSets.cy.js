import workoutexercises from '../../../fixtures//workoutexercises.json';
import workoutexercisesets from '../../../fixtures//workoutexercisesets.json';

const API_URL = Cypress.env('API_URL');
const weight = '400';
const reps = '8';
const rir = '5';

describe('WorkoutExercises screen where sets exist', () => {
  beforeEach(() => {
    cy.workoutIntercepts();

    cy.visit('/workouts/1/exercises/1');
    cy.wait('@getWorkouts');
    cy.wait('@getWorkoutExercises');
    cy.wait('@getWorkoutExerciseSets');

    cy.intercept('POST', `${API_URL}/workoutexercisesets/`, {
      workout_exercise: 1,
      weight: weight,
      reps: reps,
      rir: rir,
    }).as('postWorkoutExerciseSet');

    cy.intercept('DELETE', `${API_URL}/workoutexercisesets/1/`, {}).as(
      'deleteWorkoutExerciseSet',
    );
  });

  it('has header of exercise name', () => {
    cy.contains(workoutexercises[0].name);
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
      cy.findByTestId('actionBtn').click();
      cy.findByTestId('addSetBtn').click();
      cy.findByTestId('submitBtn').click({force: true});

      cy.get('@postWorkoutExerciseSet.all').should('have.length', 0);
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        2,
      );
    });

    it('doesnt submit if form fields contain non-numeric', () => {
      cy.findByTestId('actionBtn').click();
      cy.findByTestId('addSetBtn').click();
      cy.findByTestId('weightInput').type('weight');
      cy.findByTestId('repsInput').type('reps');
      cy.findByTestId('rirInput').type('rir');

      cy.findByTestId('submitBtn').click({force: true});

      cy.get('@postWorkoutExerciseSet.all').should('have.length', 0);
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        2,
      );
    });

    it('adds Set to the list after submit', () => {
      cy.findByTestId('actionBtn').click();
      cy.findByTestId('addSetBtn').click();
      cy.findByTestId('weightInput').type(weight);
      cy.findByTestId('repsInput').type(reps);
      cy.findByTestId('rirInput').type(rir);
      cy.findByTestId('submitBtn').click({force: true});

      cy.wait('@postWorkoutExerciseSet')
        .its('request.body')
        .should('deep.equal', {
          workout_exercise: '1',
          weight: weight,
          reps: reps,
          rir: rir,
        });

      // assert set shows in list
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        3,
      );
    });
  });

  it('WorkoutExerciseSets can be deleted', () => {
    cy.findAllByTestId('deleteWorkoutExerciseSetBtn').first().click();

    cy.wait('@deleteWorkoutExerciseSet');

    cy.findAllByTestId('workout_exercise_set_list_item').should(
      'have.length',
      1,
    );
  });

  it('can delete all sets', () => {
    cy.intercept('DELETE', `${API_URL}/workoutexercises/1/delete_sets/`, {}).as(
      'deleteAllWorkoutExerciseSets',
    );

    cy.wait(50);
    cy.findByTestId('actionBtn').click();
    cy.findByTestId('deleteSetsBtn').click();

    cy.wait('@deleteAllWorkoutExerciseSets');

    cy.findAllByTestId('workout_exercise_set_list_item').should(
      'have.length',
      0,
    );
  });

  it('can repeat last set', () => {
    cy.wait(100);
    cy.findByTestId('actionBtn').click();
    cy.findByTestId('repeatLastSetBtn').click();

    cy.wait('@postWorkoutExerciseSet')
      .its('request.body')
      .should('deep.equal', {
        workout_exercise: workoutexercisesets[1].workout_exercise,
        weight: workoutexercisesets[1].weight,
        reps: workoutexercisesets[1].reps,
        rir: workoutexercisesets[1].rir,
      });

    cy.findAllByTestId('workout_exercise_set_list_item').should(
      'have.length',
      3,
    );
  });

  describe('editing set', () => {
    it.only('clicking set shows populated form and submits put', () => {
      cy.intercept('PUT', `${API_URL}/workoutexercisesets/`, {
        workout_exercise: 1,
        weight: weight,
        reps: reps,
        rir: rir,
      }).as('putWorkoutExerciseSet');

      cy.findAllByTestId('workout_exercise_set_list_item').first().click();
      cy.findByTestId('workoutExerciseSetForm').should('be.visible');

      cy.findByTestId('weightInput')
        .should('have.value', workoutexercisesets[0].weight)
        .clear()
        .type(weight);
      cy.findByTestId('repsInput')
        .should('have.value', workoutexercisesets[0].reps)
        .clear()
        .type(reps);
      cy.findByTestId('rirInput')
        .should('have.value', workoutexercisesets[0].rir)
        .clear()
        .type(rir);

      cy.findByTestId('submitBtn').click();

      cy.wait('@putWorkoutExerciseSet')
        .its('request.body')
        .should('deep.equal', {
          workout_exercise: '1',
          weight: weight,
          reps: reps,
          rir: rir,
        });

      cy.findByTestId('workoutExerciseSetForm').should('not.be.visible');

      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        2,
      );

      cy.findAllByTestId('workout_exercise_set_list_item')
        .first()
        .contains(weight);
      cy.findAllByTestId('workout_exercise_set_list_item')
        .first()
        .contains(reps);
      cy.findAllByTestId('workout_exercise_set_list_item')
        .first()
        .contains(rir);
    });
  });
});

describe('WorkoutExercises screen where no sets exist', () => {
  beforeEach(() => {
    cy.workoutIntercepts();
    cy.intercept('POST', `${API_URL}/workoutexercisesets/`, {
      workout_exercise: 2,
      weight: weight,
      reps: reps,
      rir: rir,
    }).as('postWorkoutExerciseSet');

    cy.visit('/workouts/1/exercises/2');
    cy.findByTestId('actionBtn').click();
    cy.findByTestId('addSetBtn').click();
  });

  describe('adding a set', () => {
    it('doesnt show a form on first render', () => {
      cy.visit('/workouts/1/exercises/2');
      cy.findAllByTestId('weightInput').should('not.exist');
    });

    it('shows a form when addSetBtn is pressed', () => {
      cy.findByTestId('workoutExerciseSetForm').should('be.visible');
      cy.findAllByTestId('weightInput').should('have.length', 1);
    });

    it('adds set and closes modal', () => {
      cy.findByTestId('weightInput').type(weight);
      cy.findByTestId('repsInput').type(reps);
      cy.findByTestId('rirInput').type(rir);
      cy.findByTestId('submitBtn').click();

      cy.findByTestId('workoutExerciseSetForm').should('not.be.visible');
      cy.findAllByTestId('workout_exercise_set_list_item').should(
        'have.length',
        1,
      );

      // form is empty when reopened
      cy.findByTestId('actionBtn').click();
      cy.findByTestId('addSetBtn').click();
      cy.findByTestId('weightInput').should('have.value', '');
      cy.findByTestId('repsInput').should('have.value', '');
      cy.findByTestId('rirInput').should('have.value', '');
    });

    it('rir must be less than or equal to 5', () => {
      cy.findByTestId('weightInput').type(weight);
      cy.findByTestId('repsInput').type(reps);
      cy.findByTestId('rirInput').type(6);
      cy.findByTestId('submitBtn').click({force: true});

      cy.get('@postWorkoutExerciseSet.all').should('have.length', 0);
    });
  });
});
