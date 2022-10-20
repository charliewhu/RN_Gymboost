import {HeaderBackButton} from '@react-navigation/elements';
import {SpeedDial} from '@rneui/themed';
import hexToRgba from 'hex-to-rgba';
import {useLayoutEffect, useState} from 'react';
import {Platform} from 'react-native';

import WorkoutExerciseSetList from '../../components/workoutExerciseSets/WorkoutExerciseSetList';
import useTheme from '../../utils/useTheme';

export default function WorkoutExerciseSets({navigation, route}) {
  const [fabOpen, setFabOpen] = useState(false);
  const theme = useTheme();

  useLayoutEffect(() => {
    Platform.OS === 'web'
      ? navigation.setOptions({
          headerLeft: props => (
            <HeaderBackButton
              {...props}
              testID="goBackBtn"
              onPress={() => {
                navigation.pop();
                navigation.navigate('WorkoutExercisesScreen', {
                  id: route.params.id,
                });
              }}
            />
          ),
        })
      : null;
  });

  return (
    <>
      <WorkoutExerciseSetList route={route} />
      <SpeedDial
        testID="actionBtn"
        isOpen={fabOpen}
        icon={{name: 'edit'}}
        openIcon={{name: 'close'}}
        onOpen={() => setFabOpen(!fabOpen)}
        onClose={() => setFabOpen(!fabOpen)}
        color={theme.colors.primary}
        overlayColor={hexToRgba(theme.colors.white, 0.9)}
      >
        <SpeedDial.Action
          testID="addSetBtn"
          icon={{name: 'add'}}
          color={theme.colors.primary}
          title="Add Set"
          onPress={() => {
            setFabOpen(false);
          }}
        />
      </SpeedDial>
    </>
  );
}
