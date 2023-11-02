

import React from 'react'
import {View,Text,StyleSheet, Button, SafeAreaView, Pressable} from 'react-native'
import TextMiddleIcon from '../Components/TextMiddleIcon'
import ButtonIconTop from '../Components/ButtonIconTop'
import Ionicons from '@expo/vector-icons/Ionicons';







function Chats({navigation}){
 
 return ( 
  
 <View style={styles.container}>

                
   
    <View >
        <Text style={styles.text2}> 
              All of your chats are archived .Tap the {<TextMiddleIcon icon="create"
            color="black"/>}to start a new chat
        </Text>

        <View style={{marginTop:25}}>
                    <View style={{borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}}><Text style={{color:"#00a2ed",marginBottom:18,}}>Archived</Text></View>
                    
                    <Pressable onPress={()=>{navigation.navigate("BroadcastLists")}} style={{borderBottomColor:"grey",borderBottomWidth:"1"}}><Text  style={{color:"#00a2ed",marginBottom:12}}>Broadcast Lists</Text></Pressable>
                    {/* <Button title="Test Button" onPress={()=>navigation.navigate("Settings")}/> */}
                   
                      
                     </View>

    </View> 


    
    
   </View>
   
    


 
  )
}

export default Chats

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
   
      padding:30
    
    },
    text:{
        fontSize:20,
        fontWeight:"bold",
        marginBottom:10,
      },
    text2:{
      
        height:"50%",
         alignItems:"center",
        justifyContent:"center",
        fontSize:20,
      
        // fontWeight:"bold"
    },
    broadcast:{
     
      flexDirection:"row",
      justifyContent:"space-between"
    },
    archived:{
      flexDirection:"column"
    }
  });


