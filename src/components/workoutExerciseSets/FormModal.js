import {BottomSheet, ListItem} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function FormModal({modalIsVisible, setModalIsVisible}) {
  return (
    <SafeAreaProvider>
      <BottomSheet
        modalProps={{}}
        isVisible={modalIsVisible}
        onBackdropPress={() => setModalIsVisible(false)}
      >
        <ListItem bottomDivider={false}>
          <ListItem.Content style={styles.listItem}>
            <ListItem.Title>Modal Item 1</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem bottomDivider={false}>
          <ListItem.Content style={styles.listItem}>
            <ListItem.Title>Modal Item 2</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </BottomSheet>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  listItem: {
    height: 100,
  },
});
