import {ThemeProvider} from '@rneui/themed';
import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Provider} from 'react-redux';
import Navigation from './src/Navigation';
import setupStore from './src/redux/store';
import useTheme from './src/utils/useTheme';

export default function App() {
  const myTheme = useTheme();
  return (
    <Provider store={setupStore()}>
      <ThemeProvider theme={myTheme}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <Navigation />
        </SafeAreaProvider>
      </ThemeProvider>
    </Provider>
  );
}
