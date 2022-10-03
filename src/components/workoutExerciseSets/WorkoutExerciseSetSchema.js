import * as Yup from 'yup';

export const WorkoutExerciseSetSchema = Yup.object().shape({
  weight: Yup.number()
    .min(0, 'Weight must be greater than or equal to 0')
    .max(500, 'Weight must be less than 500')
    .test(
      'oneOfRequired',
      'One of Field1, Field2, Field3 must be entered',
      function () {
        return this.parent.weight && this.parent.reps && this.parent.rir;
      },
    ),
  reps: Yup.number()
    .min(0, 'Reps must be greater than or equal to 0')
    .max(100, 'Reps must be less than 100')
    .integer('Reps must be an integer')
    .test(
      'oneOfRequired',
      'One of Field1, Field2, Field3 must be entered',
      function () {
        return this.parent.weight && this.parent.reps && this.parent.rir;
      },
    ),
  rir: Yup.number()
    .min(0, 'RIR must be greater than or equal to 0')
    .max(5, 'If your RIR was higher than 5, select 5')
    .integer('RIR must be an integer')
    .test(
      'oneOfRequired',
      'One of Field1, Field2, Field3 must be entered',
      function () {
        return this.parent.weight && this.parent.reps && this.parent.rir;
      },
    ),
});
