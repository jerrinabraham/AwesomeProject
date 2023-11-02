import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
function Camera(){
 return ( <View style={styles.container}>
     <Text>
     Camera
     </Text>
 </View>)
}

export default Camera

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });