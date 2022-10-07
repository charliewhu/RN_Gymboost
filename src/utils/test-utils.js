import {render} from '@testing-library/react-native';

import {Provider} from 'react-redux';
import store from '../redux/store';

export function testRender(ui, {store, ...otherOpts}) {
  return render(<Provider store={store}>{ui}</Provider>, otherOpts);
}

export function makeTestStore() {
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}
