import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
function Status(){
 return ( 
 <View style={styles.container}>
   
   
      <View style={{alignItems:"flex-start",backgroundColor:"lightgrey",height:120}}>
            
            
            <View style={{padding:10,marginTop:25}}>
            
                <Button title="Privacy"/>
                  <View style={{marginHorizontal:0}}>
                    <Text style={{fontSize:25,fontWeight:"bold"}}>Status</Text>
                  </View>
            </View>

           
            <View style={{marginTop:20}}>
                <Text style={{fontWeight:"700"}}>My Status</Text>
                <Text style={{color:"grey"}}>Add to my Status</Text>
            </View>

            <View style={{marginTop:10,backgroundColor:"lightgrey",height:50,width:"100%"}}>
                <Text style={{color:"grey",marginHorizontal:20,marginTop:20}}>VIEWED UPDATES</Text>
            </View>
           
      
      </View>
     
    
 </View>)
}

export default Status

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
     
    },
  });