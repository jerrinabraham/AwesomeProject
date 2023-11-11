

import React, { useState } from 'react'
import {View,Text,StyleSheet, Button, SafeAreaView, Pressable} from 'react-native'
import TextMiddleIcon from '../Components/TextMiddleIcon'
// import ButtonIconTop from '../Components/ButtonIconTop'
import Ionicons from '@expo/vector-icons/Ionicons';
import Card from './Card';
import Chatsss from './Chatsss/Chatsss';
import ExampleOne from '../Components/Example/ExampleOne';







function Chats({navigation}){
  const [first, setfirst] = useState(true)
 
  // return ( 

  //   <View style={{flex:1,
  //        backgroundColor: '#fff',
      
  //        padding:30}}>
   
                   
      
  //  <View >
  //      <Text style={styles.text2}> 
  //            All of your chats are archived .Tap the {<TextMiddleIcon icon="create"
  //          color="black"/>}to start a new chats
  //      </Text>
     
   
  //      <View style={{marginTop:25}}>
   
  //                  <Pressable style={{borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}} onPress={()=>{navigation.navigate("Archived")}}><Text style={{color:"#00a2ed",marginBottom:18,}}>Archived</Text></Pressable>
                   
  //                  <Pressable onPress={()=>{navigation.navigate("BroadcastLists")}} style={{borderBottomColor:"grey",borderBottomWidth:"1"}}><Text  style={{color:"#00a2ed",marginBottom:12}}>Broadcast Lists</Text></Pressable>
  //                  {/* <Button title="Test Button" onPress={()=>navigation.navigate("Settings")}/> */}
                  
                     
  //                   </View>
   
  //  </View> 
   
   
   
   
  //  </View>
   
    
   
   
   
      
   
   
   
    
  //    )




  return(
    <>
    {!first==true?
       <View style={{flex:1,
         backgroundColor: '#fff',
      
         padding:30}}>
   
                   
      
   <View >
       <Text style={styles.text2}> 
             All of your chats are archived .Tap the {<TextMiddleIcon icon="create"
           color="black"/>}to start a new chats
       </Text>
     
   
       <View style={{marginTop:25}}>
   
                   <Pressable style={{borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}} onPress={()=>{navigation.navigate("Archived")}}><Text style={{color:"#00a2ed",marginBottom:18,}}>Archived</Text></Pressable>
                   
                   <Pressable onPress={()=>{navigation.navigate("BroadcastLists")}} style={{borderBottomColor:"grey",borderBottomWidth:"1"}}><Text  style={{color:"#00a2ed",marginBottom:12}}>Broadcast Lists</Text></Pressable>
                   {/* <Button title="Test Button" onPress={()=>navigation.navigate("Settings")}/> */}
                  
                     
                    </View>
   
   </View> 
   
   
   
   
   </View>:<ExampleOne/>} 
    </>
    
    
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
        // backgroundColor:"red"
      
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


