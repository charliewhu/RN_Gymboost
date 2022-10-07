import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {useColorScheme} from 'react-native';
import {DefaultTheme} from 'react-native-paper';
import Home from './screens/Home';
import CreateExercise from './screens/exercises/CreateExercise';
import Exercises from './screens/exercises/Exercises';
import CreateRoutine from './screens/routines/CreateRoutine';
import RoutineExercises from './screens/routines/RoutineExercises';
import Routines from './screens/routines/Routines';
import WorkoutExerciseSets from './screens/workouts/WorkoutExerciseSets';
import WorkoutExercises from './screens/workouts/WorkoutExercises';
import Workouts from './screens/workouts/Workouts';
import useTheme from './utils/useTheme';

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
      initialRouteName: 'RoutinesScreen',
      screens: {
        RoutinesScreen: '',
        RoutineExercisesScreen: ':id',
        CreateRoutineScreen: 'create',
        ExerciseScreen: ':id/add_exercise',
        CreateExerciseScreen: ':id/add_exercise/create',
      },
    },
    Workouts: {
      path: 'workouts',
      initialRouteName: 'WorkoutsScreen',
      screens: {
        WorkoutsScreen: '',
        WorkoutExercisesScreen: ':id',
        WorkoutExerciseSetsScreen: ':id/exercises/:workoutExerciseId',
        ExerciseScreen: ':id/add_exercise',
        CreateExerciseScreen: ':id/add_exercise/create',
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
        options={{title: 'Gymboost'}}
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
        name="RoutinesScreen"
        component={Routines}
        options={{title: 'Routines'}}
      />
      <RoutineStackNav.Screen
        name="RoutineExercisesScreen"
        component={RoutineExercises}
        //options={{title: 'Routines'}}
      />
      <RoutineStackNav.Screen
        name="CreateRoutineScreen"
        component={CreateRoutine}
        options={{title: 'Create Routine'}}
      />
      <RoutineStackNav.Screen
        name="ExerciseScreen"
        component={Exercises}
        options={{title: 'Exercises'}}
      />
      <RoutineStackNav.Screen
        name="CreateExerciseScreen"
        component={CreateExercise}
        options={{title: 'Create Exercise'}}
      />
    </RoutineStackNav.Navigator>
  );
}

const WorkoutStackNav = createNativeStackNavigator();
export function WorkoutStack() {
  return (
    <WorkoutStackNav.Navigator>
      <WorkoutStackNav.Screen
        name="WorkoutsScreen"
        component={Workouts}
        options={{title: 'Workouts'}}
      />
      <WorkoutStackNav.Screen
        name="WorkoutExercisesScreen"
        component={WorkoutExercises}
        options={{title: 'Workout Exercises'}}
      />
      <WorkoutStackNav.Screen
        name="WorkoutExerciseSetsScreen"
        component={WorkoutExerciseSets}
        options={{title: 'Sets'}}
      />
      <WorkoutStackNav.Screen
        name="ExerciseScreen"
        component={Exercises}
        options={{title: 'Exercises'}}
      />
      <WorkoutStackNav.Screen
        name="CreateExerciseScreen"
        component={CreateExercise}
        options={{title: 'Create Exercise'}}
      />
    </WorkoutStackNav.Navigator>
  );
}

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  const theme = useTheme();

  const active = theme.colors.black;
  const inactive = theme.colors.grey3;

  const options = {
    headerShown: false,
    tabBarActiveTintColor: active,
    tabBarInactiveTintColor: inactive,
  };

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Exercises"
        component={ExerciseStack}
        options={{
          ...options,
          tabBarTestID: 'exercises_tab',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="barbell-outline"
              size={26}
              color={focused ? active : inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          ...options,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home-outline"
              size={26}
              color={focused ? active : inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Routines"
        component={RoutineStack}
        options={{
          ...options,
          tabBarTestID: 'routines_tab',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="list-outline"
              size={26}
              color={focused ? active : inactive}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutStack}
        options={{
          ...options,
          tabBarTestID: 'workouts_tab',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="pulse-outline"
              size={26}
              color={focused ? active : inactive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function Navigation() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <TabNavigator />
    </NavigationContainer>
  );
}
