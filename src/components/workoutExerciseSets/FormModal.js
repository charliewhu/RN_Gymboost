import {BottomSheet} from '@rneui/themed';
import hexToRgba from 'hex-to-rgba';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import WorkoutExerciseSetForm from './WorkoutExerciseSetForm';

export default function FormModal({
  route,
  theme,
  modalIsVisible,
  setModalIsVisible,
}) {
  return (
    <SafeAreaProvider>
      <BottomSheet
        modalProps={{}}
        scrollViewProps={{
          style: {
            paddingBottom: 50,
            backgroundColor: theme.colors.white,
          },
        }}
        isVisible={modalIsVisible}
        backdropStyle={{backgroundColor: hexToRgba(theme.colors.white, 0.9)}}
        onBackdropPress={() => setModalIsVisible(false)}
      >
        <WorkoutExerciseSetForm route={route} />
      </BottomSheet>
    </SafeAreaProvider>
  );
}
