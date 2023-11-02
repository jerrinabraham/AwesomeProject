import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonIconTop({onPress,icon}) {
  return (
    <View style={styles.container}>
      <Ionicons onPress={onPress} name={icon} size={32} color="grey" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    marginRight:30
  },
});
