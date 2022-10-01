import {StatusBar} from 'expo-status-bar';
import {
  MD3LightTheme as DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import store from './src/redux/store';

const theme = {
  ...DefaultTheme,
  roundness: 0,
  colors: {
    ...DefaultTheme.colors,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Navigation />
        </SafeAreaProvider>
      </PaperProvider>
    </Provider>
  );
}
