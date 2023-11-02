import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BottomIconDown({onPress,icon,size,color}) {
  return (
    <View style={styles.container}>
      <Ionicons onPress={onPress} name={icon} size={size} color={color}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight:0,
    
    
    
    
  },
});
