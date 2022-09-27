import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Exercises from './screens/Exercises';

const linking = {
  config: {
    screens: {
      Exercises: {
        path: '/exercises',
        initialRouteName: 'Exercises',
        screens: {
          Exercises: '',
        },
      },
    },
  },
};

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Exercises" component={Exercises} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
