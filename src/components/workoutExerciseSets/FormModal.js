import hexToRgba from 'hex-to-rgba';
import {KeyboardAvoidingBottomSheet} from '../utils/KeyboardAvoidingBottomSheet';
import WorkoutExerciseSetForm from './WorkoutExerciseSetForm';

export default function FormModal({
  route,
  theme,
  modalIsVisible,
  setModalIsVisible,
}) {
  return (
    <>
      <KeyboardAvoidingBottomSheet
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
      </KeyboardAvoidingBottomSheet>
    </>
  );
}
