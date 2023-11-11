// import {View,Text, TextInput,FlatList, ScrollView,StyleSheet,ImageBackground, KeyboardAvoidingView, Platform,TouchableOpacity} from 'react-native'
// import TextMiddleIcon from '../Components/TextMiddleIcon'
// import BottomIconDown from '../Components/BottomIconDown'
// import { useEffect, useState } from 'react';
// import {firebase} from '../../AwesomeProject/config'

// const image = { uri: "https://cdn.wallpapersafari.com/4/11/WofyVJ.png" };
// function PersonalChatWindow({navigation}){

//   const [enterText, setEnterText] = useState("")
//   const [List, setList] = useState([])


 

//   useEffect(() => {
  
//     try {
    
//       firebase.firestore().collection('jack')
//       .onSnapshot((snap) => {
//         console.log("snap",snap)
//         const tempArray = []
//         snap.forEach((item) => {
//           // console.log("items",item.data())
       
//           tempArray.push({
//             ...item.data(),
//             id:item.id
//           });
//         })

//         setList(tempArray)
//       })

     
//     } catch (err) {
//       console.log(err);
//     }

//   },[])

//   function textAddedHandler(){



//   }

//   const saveHandler=()=>{
  
 
//     firebase.firestore().collection('jack')
//     .add({
//      EnteredText:enterText,
     
    
//     })
  
//     .then(resp=>console.log(resp))
   
  
//     .catch(err=>console.log(err))
  
//     navigation.navigate("NewChat")
//   }
  
//     return(
    
   


                        
       
        
//                         <View style={{flex:1,marginBottom:0,backgroundColor:"white"}}>
//     <ImageBackground source={image} resizeMode="cover" style={styles.image}>

//     <FlatList data={List} renderItem={({item})=>{
//        console.log("todos",item)
//         return(<View style={{justifyContent:"center",borderBottomColor:"lightgrey",borderBottomWidth:"1"}}>
 
//      <TouchableOpacity style={{marginVertical:10}} onPress={() => navigation.navigate("PersonalChatWindow",{name:item.Firstname})}>
      
//           <Text>{item.EnteredText}</Text>
//       </TouchableOpacity> 
 
          
          
 
//   </View>)
//     }}/> 





//                                 <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:0,height:40,backgroundColor:"lightgrey"}}>
//                                 <BottomIconDown icon="add" size={28} color="#0083ce" onPress={()=>navigation.navigate("PlusButton")} />  
                               
//                                 {/* <View style={styles.input}>
                                       
//                                        <View style={{flex:1}}>    
//                                             <TextInput style={{backgroundColor:"white"}}placeholder='Enter Text' onChangeText={changeTextHandler}></TextInput>
//                                         </View>                    
                                                   
//                                                     <TextMiddleIcon icon="document-outline"/>
//                                                 </View>

//                                         <BottomIconDown icon="camera-outline" size={28} color="#0083ce" />  
//                                         <BottomIconDown icon="mic-outline" size={28} color="#0083ce" />   */}



//                         <View style={styles.input}>
                                       
//                                        <View style={{flex:1}}>    
//                                             <TextInput style={{backgroundColor:"white"}}placeholder='Enter Text' onChangeText={(text)=>setEnterText(text)} ></TextInput>
//                                         </View>                    
                                                   
//                                                     <TextMiddleIcon icon="document-outline"/>
//                                                 </View>

//                                              <TouchableOpacity onPress={saveHandler}>
                                              
//                                               <Text>Enter</Text>
//                                               </TouchableOpacity>
                               
                                        
//                                 </View>


                            
                            
                                 


                               
//                                 </ImageBackground>
//                         </View>
                       
                      

                        


  
//        )
// }

// export default PersonalChatWindow

// const styles=  StyleSheet.create({

//     input:{
//         width:"80%",
       
//         marginHorizontal:10,
//         flexDirection:"row",
//         justifyContent:"space-between",
      
//         padding:4,
//         marginTop:0,
//         height:25,
//         borderColor:"white",
//         borderWidth:1,
//         backgroundColor:"white",
//         borderRadius:15
//     },
//       image: {
//     flex: 1,
//     width:"100%",
//     justifyContent: "flex-end"
    
//   },

// })




import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

function PersonalChatWindow(){
  const [messages, setMessages] = useState([])

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'This is a quick reply. Do you love Gifted Chat? (radio) KEEP IT',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: '😋 Yess',
              value: 'yes',
            },
            {
              title: '📷 Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: '😞 Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
      {
        _id: 2,
        text: 'This is a quick reply. Do you love Gifted Chat? (checkbox)',
        createdAt: new Date(),
        quickReplies: {
          type: 'checkbox', // or 'radio',
          values: [
            {
              title: 'Yes',
              value: 'yes',
            },
            {
              title: 'Yes, let me show you with a picture!',
              value: 'yes_picture',
            },
            {
              title: 'Nope. What?',
              value: 'no',
            },
          ],
        },
        user: {
          _id: 2,
          name: 'React Native',
        },
      },
    ])
  }, [])




  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  )
}


export default PersonalChatWindow