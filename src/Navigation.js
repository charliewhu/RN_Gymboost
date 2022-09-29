import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateExercise from './screens/CreateExercise';
import Exercises from './screens/Exercises';
import Home from './screens/Home';

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
      <HomeStackNav.Screen
        name="HomeScreen"
        component={Home}
        options={{title: 'Home Screen'}}
      />
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
      options={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="home-outline"
            size={26}
            color={focused ? 'black' : 'lightgray'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Exercises"
      component={ExerciseStack}
      options={{
        headerShown: false,
        tabBarTestID: 'exercises_tab',
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="barbell-outline"
            size={26}
            color={focused ? 'black' : 'lightgray'}
          />
        ),
      }}
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
