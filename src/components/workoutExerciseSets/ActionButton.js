import {SpeedDial} from '@rneui/themed';
import hexToRgba from 'hex-to-rgba';

export default function ActionButton({
  theme,
  fabOpen,
  setFabOpen,
  setModalIsVisible,
}) {
  return (
    <SpeedDial
      testID="actionBtn"
      isOpen={fabOpen}
      icon={{name: 'edit', color: theme.colors.white}}
      openIcon={{name: 'close', color: theme.colors.white}}
      onOpen={() => setFabOpen(!fabOpen)}
      onClose={() => setFabOpen(!fabOpen)}
      color={theme.colors.primary}
      overlayColor={hexToRgba(theme.colors.white, 0.9)}
    >
      <SpeedDial.Action
        testID="addSetBtn"
        icon={{name: 'add', color: theme.colors.white}}
        color={theme.colors.primary}
        title="Add Set"
        onPress={() => {
          setFabOpen(false);
          setModalIsVisible(true);
        }}
      />
    </SpeedDial>
  );
}
