import Ionicons from '@expo/vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './screens/Home';
import CreateExercise from './screens/exercises/CreateExercise';
import Exercises from './screens/exercises/Exercises';
import CreateRoutine from './screens/routines/CreateRoutine';
import Routines from './screens/routines/Routines';
import WorkoutExerciseSets from './screens/workouts/WorkoutExerciseSets';
import WorkoutExercises from './screens/workouts/WorkoutExercises';
import Workouts from './screens/workouts/Workouts';
import RoutineExercises from './screens/routines/RoutineExercises';

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
const TabNavigator = () => (
  <Tab.Navigator initialRouteName="Home">
    <Tab.Screen
      name="Exercises"
      component={ExerciseStack}
      options={{
        headerShown: false,
        tabBarTestID: 'exercises_tab',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
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
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
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
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        tabBarIcon: ({focused}) => (
          <Ionicons
            name="list-outline"
            size={26}
            color={focused ? 'black' : 'lightgray'}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Workouts"
      component={WorkoutStack}
      options={{
        headerShown: false,
        tabBarTestID: 'workouts_tab',
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'lightgray',
        //tabBarShowLabel: false,
        tabBarIcon: ({focused}) => (
          <Ionicons
            //name="fitness-outline"
            name="pulse-outline"
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
