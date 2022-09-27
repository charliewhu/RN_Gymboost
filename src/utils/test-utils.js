import {render} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from '../redux/store';

export function renderWithProviders(ui, {...renderOptions} = {}) {
  function Wrapper({children}) {
    return (
      <Provider store={store}>
        <PaperProvider>{children}</PaperProvider>
      </Provider>
    );
  }
  return {store, ...render(ui, {wrapper: Wrapper, ...renderOptions})};
}
