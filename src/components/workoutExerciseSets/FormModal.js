import React from 'react';
import {BottomSheet, Text} from '@rneui/themed';

export default function FormModal({modalIsVisible}) {
  return (
    <BottomSheet modalProps={{}} isVisible={modalIsVisible}>
      <Text>Modal</Text>
    </BottomSheet>
  );
}
