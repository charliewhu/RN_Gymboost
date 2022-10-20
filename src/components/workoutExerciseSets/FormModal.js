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
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
        onBackdropPress={() => setModalIsVisible(false)}
      >
        <WorkoutExerciseSetForm route={route} />
      </KeyboardAvoidingBottomSheet>
    </>
  );
}
