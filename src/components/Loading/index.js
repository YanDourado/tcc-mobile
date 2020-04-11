import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

export default function Loading(props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={props.size ? props.size : 'large'} color={props.color ? props.color : '00A8E8'} />
    </View>
  );
}