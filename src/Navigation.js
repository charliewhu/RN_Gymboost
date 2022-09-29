import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import CreateExercise from './screens/CreateExercise';
import Exercises from './screens/Exercises';

const config = {
  screens: {
    // set config for Tabs screen
    // Use name prop from .Screen level
    Home: {
      path: '',
      screens: {
        HomeScreen: '',
      },
    },
    Exercises: {
      path: 'exercises',
      initialRouteName: 'ExerciseScreen',
      screens: {
        ExerciseScreen: '',
        CreateExerciseScreen: 'create',
      },
    },
  },
};

const linking = {
  config: config,
};

const HomeStackNav = createNativeStackNavigator();
export function HomeStack() {
  return (
    <HomeStackNav.Navigator>
      <HomeStackNav.Screen name="HomeScreen" component={Home} />
    </HomeStackNav.Navigator>
  );
}

const ExerciseStackNav = createNativeStackNavigator();
export function ExerciseStack() {
  return (
    <ExerciseStackNav.Navigator>
      <ExerciseStackNav.Screen
        name="ExerciseScreen"
        component={Exercises}
        options={{title: 'Exercises'}}
      />
      <ExerciseStackNav.Screen
        name="CreateExerciseScreen"
        component={CreateExercise}
        options={{title: 'Create Exercise'}}
      />
    </ExerciseStackNav.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeStack}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="Exercises"
      component={ExerciseStack}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

export default function Navigation() {
  return (
    <NavigationContainer linking={linking}>
      <TabNavigator />
    </NavigationContainer>
  );
}
