import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateExercise from './screens/CreateExercise';
import Exercises from './screens/Exercises';

const linking = {
  config: {
    screens: {
      Exercises: {
        path: 'exercises',
        initialRouteName: 'Exercises',
        screens: {
          Exercises: '',
          CreateExercise: 'create',
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
        <Stack.Screen
          name="CreateExercise"
          component={CreateExercise}
          options={{title: 'Create Exercise'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
