import {renderWithProviders} from '../../utils/test-utils';
import {screen} from '@testing-library/react-native';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {useDispatch, useSelector} from 'react-redux';

import {CYPRESS_API_URL} from '@env';
import ExerciseList from '../../components/exercises/ExerciseList';

export const handlers = [
  rest.get(`${CYPRESS_API_URL}/exercises/`, (req, res, ctx) => {
    return res(ctx.json('John Smith'), ctx.delay(150));
  }),
];

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

describe('ExerciseList', () => {
  it('requests exercises', () => {
    renderWithProviders(<ExerciseList />);
    expect(screen.getByText('Exercises')).toBeTruthy();
  });
});
