import {renderWithProviders} from '../../utils/test-utils';
import {screen} from '@testing-library/react-native';

import Exercises from '../Exercises';

describe('Exercises Screen', () => {
  it('shows a list of exercises', () => {
    renderWithProviders(<Exercises />);
    expect(screen.getByText('Exercises')).toBeInTheDocument();
  });
  it.todo('shows an Add Exercise button');
});
