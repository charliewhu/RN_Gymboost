import {CYPRESS_API_URL} from '@env';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {renderWithProviders} from '../../utils/test-utils';
import Home from '../Home';

export const handlers = [
  rest.get(`${CYPRESS_API_URL}/workouts/`, (req, res, ctx) => {
    return res(ctx.workouts, ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('fetches & receives Workouts on render', async () => {
  renderWithProviders(<Home />);

  // expect(await screen.findByText(/John Smith/i)).toBeInTheDocument();
  // expect(screen.queryByText(/no user/i)).not.toBeInTheDocument();
  // expect(screen.queryByText(/Fetching user\.\.\./i)).not.toBeInTheDocument();
});
