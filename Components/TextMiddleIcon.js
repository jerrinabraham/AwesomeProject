import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TextMiddleIcon({onPress,icon}) {
  return (
    <View style={{marginTop:-5}}>
      <Ionicons onPress={onPress} name={icon} size={20} color="#0083ce" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
   
  },
});
