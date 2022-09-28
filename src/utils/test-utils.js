import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from '../redux/store';

export function testRender(ui, {store, ...otherOpts}) {
  return render(
    <Provider store={store}>
      <PaperProvider>{ui}</PaperProvider>
    </Provider>,
    otherOpts,
  );
}

export function makeTestStore() {
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}
