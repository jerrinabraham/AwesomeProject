


import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function IPersonalChatWindowIconTop({onPress,onPressing,icon,icons,size,sizes,color,colors}) {
  return (
    <View style={styles.container}>
     
      <Ionicons style={{marginHorizontal:18}} onPress={onPressing} name={icons} size={sizes} color={colors} />
      <Ionicons onPress={onPress} name={icon} size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection:"row",
    

  
    marginRight:0,
    
    
  },
});
