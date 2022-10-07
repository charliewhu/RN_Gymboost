import {createTheme} from '@rneui/themed';
import {useColorScheme} from 'react-native';

export default function useTheme() {
  const colorScheme = useColorScheme();

  console.log(colorScheme);

  const baseTheme = colorScheme === 'dark' ? 'dark' : 'light';

  console.log(baseTheme);

  const theme = createTheme({
    mode: baseTheme,
    lightColors: {
      primary: '#f2f2f2',
    },
    darkColors: {
      primary: '#121212',
    },
  });

  return theme;
}
