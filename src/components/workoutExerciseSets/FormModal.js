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
            paddingBottom: 10,
            backgroundColor: theme.colors.grey6,
            borderTopWidth: 2,
            borderColor: theme.colors.grey5,
          },
        }}
        isVisible={modalIsVisible}
        backdropStyle={{backgroundColor: 'rgba(0,0,0,0)'}}
        onBackdropPress={() => setModalIsVisible(false)}
      >
        <WorkoutExerciseSetForm
          route={route}
          setModalIsVisible={setModalIsVisible}
        />
      </KeyboardAvoidingBottomSheet>
    </>
  );
}
