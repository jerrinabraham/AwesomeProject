import React from 'react'
import {View,Text,StyleSheet, Button} from 'react-native'
import BottomIconDown from '../Components/BottomIconDown'
function Calls(){
 return ( <View style={styles.container}>
{/* <View>
    <Button title="Edit"/>
    <BottomIconDown icon="call" size={25} color="grey"  />
 </View> */}
 <Button title="Edit"/>
 <View >

    <BottomIconDown icon="call" size={25} color="grey"  />
 </View>

    </View>

 )
}

export default Calls

const styles = StyleSheet.create({
    container: {
      
 
  marginTop:60,
  flexDirection:"row",
  
      justifyContent:"space-between",
      backgroundColor: '#fff',
    
    },
  });