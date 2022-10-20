import {SpeedDial} from '@rneui/themed';
import hexToRgba from 'hex-to-rgba';

export default function ActionButton({theme, fabOpen, setFabOpen}) {
  return (
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
  );
}
