import {testRender, makeTestStore} from '../../utils/test-utils';
import {render, screen, fireEvent} from '@testing-library/react-native';

import {getExercises} from '../../redux/exercise/exerciseSlice';

import ExerciseList from '../../components/exercises/ExerciseList';

describe('ExerciseList', () => {
  it('says Exercises', () => {
    const store = makeTestStore();

    testRender(<ExerciseList />, {store});

    expect('Exercises').toBeTruthy();
  });

  it('sends a request to server', () => {
    const store = makeTestStore();

    testRender(<ExerciseList />, {store});
    expect(store.dispatch).toHaveBeenCalledWith(getExercises);
  });

  it('renders list of exercises', () => {
    // Arrange
    const exercises = [
      {
        id: 1,
        name: 'Ex1',
      },
      {
        id: 2,
        name: 'Ex2',
      },
    ];
    const store = makeTestStore();
    store.dispatch(getExercises(exercises));

    // Act
    testRender(<ExerciseList />, {store});

    // Assert
    const exerciseList = screen.getAllByTestId('exercise_list_item');
    expect(exerciseList).toHaveLength(2);
    expect(exerciseList[0]).toHaveTextContent(exercises[0].name);
  });
});
