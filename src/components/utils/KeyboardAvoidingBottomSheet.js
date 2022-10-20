import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

/**
 * Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 */
export const KeyboardAvoidingBottomSheet = ({
  containerStyle,
  backdropStyle,
  onBackdropPress = () => null,
  isVisible = false,
  modalProps = {},
  children,
  scrollViewProps = {},
  ...rest
}) => {
  return (
    <Modal
      animationType="slide"
      onRequestClose={onBackdropPress}
      transparent={true}
      visible={isVisible}
      {...modalProps}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <Pressable
          onPress={onBackdropPress}
          style={[StyleSheet.absoluteFill, backdropStyle]}
          testID="RNE__Overlay__backdrop"
        />

        <SafeAreaView
          style={StyleSheet.flatten([
            styles.safeAreaView,
            containerStyle && containerStyle,
          ])}
          pointerEvents="box-none"
          {...rest}
        >
          <View>
            <ScrollView {...scrollViewProps}>{children}</ScrollView>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'column-reverse',
  },
  container: {
    flex: 1,
  },
});
