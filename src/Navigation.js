import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CreateExercise from './screens/CreateExercise';
import Exercises from './screens/Exercises';
import Home from './screens/Home';
import Routines from './screens/Routines';

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
    Routines: {
      path: 'routines',
      initialRouteName: 'RoutineScreen',
      screens: {
        RoutineScreen: '',
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

const RoutineStackNav = createNativeStackNavigator();
export function RoutineStack() {
  return (
    <RoutineStackNav.Navigator>
      <RoutineStackNav.Screen
        name="RoutineScreen"
        component={Routines}
        options={{title: 'Routines'}}
      />
    </RoutineStackNav.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
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
      name="Routines"
      component={RoutineStack}
      options={{
        headerShown: false,
        tabBarTestID: 'routines_tab',
        tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="list-outline"
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
