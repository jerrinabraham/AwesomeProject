
import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet,Button, TextInput,Pressable,TouchableOpacity,Modal,FlatList} from 'react-native'
import TextMiddleIcon from '../Components/TextMiddleIcon'
import NewChatIcons from '../Components/NewChatIcons'
import { useNavigation } from '@react-navigation/native'
import NewContact from './NewContact/NewContact'
import {firebase} from '../config'


// import { TouchableOpacity } from 'react-native-gesture-handler'
function NewChat({navigation,route}){
  

//  console.log("route",route.params.justin)




  const [modalVisible, setModalVisible] = useState(true);
  const [close, setClose] = useState(false);
  const [List, setList] = useState([])


  useEffect(() => {
    if (route.params?.post) {
     console.log("route.params?.post",route.params?.post)
    }
  }, [route.params?.post]);

  useEffect(() => {
  
    try {
    
      firebase.firestore().collection('todos')
      .onSnapshot((snap) => {
        console.log("snap",snap)
        const tempArray = []
        snap.forEach((item) => {
          // console.log("items",item.data())
       
          tempArray.push({
            ...item.data(),
            id:item.id
          });
        })

        setList(tempArray)
      })

     
    } catch (err) {
      console.log(err);
    }

  },[])

  
  
  function Handler(){
    // onPress={() => navigation.goBack()}
    navigation.navigate("NewContact")
  setModalVisible(false)
  setClose(false)

  }
 return ( 
  <View>

  
 
 
 
 
  
  
  <View style={styles.input}>
   <TextMiddleIcon icon="search"/>
   <TextInput style={{marginTop:-4,marginLeft:10}}placeholder='Search name or Number'></TextInput>
   
 </View>
 
 
 <View style={{marginTop:30}}>
                       
                   <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}}>
                               <View style={{marginVertical:12}}><NewChatIcons icon="people"/></View>
                           <View style={{alignItems:"flex-start"}}><Button style={{color:"#00a2ed"}} title="New Group"/></View>
 
                           </View>
 
 
 
                           <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}}>
                               <View style={{marginVertical:12}}><NewChatIcons icon="person"/></View>
                           
                           {/* <TouchableOpacity onPress={Handler} style={{alignItems:"flex-start"}}>
                               <Text style={{color:"#00a2ed"}} >New Contact</Text>
                             </TouchableOpacity> */}
                               <View style={{alignItems:"flex-start"}}><Button style={{color:"#00a2ed"}} onPress={Handler}title="New Contact"/></View>
 
                           </View>
                         
                     
                     
                
                    
                       
                      </View>
 
 
 
 
 
 
 
   <View style={{marginTop:10,borderBottomColor:"grey",borderBottomWidth:"1"}}>
     <Text style={{color:"grey",marginBottom:10}}>Frequently Contacted</Text>
   </View> 

   <View style={{marginLeft:20,marginVertical:15}}>
    <Text style={{color:"grey"}}>Contacts on Whatsapp</Text>
    

   </View>


   {List.length>0?
   <View style={{marginVertical:0,backgroundColor:"white",margin:20,padding:5,borderRadius:10}}>
   <FlatList data={List} renderItem={({item})=>{
       console.log("todos",item)
        return(<View style={{justifyContent:"center",borderBottomColor:"lightgrey",borderBottomWidth:"1"}}>
 
     <TouchableOpacity style={{marginVertical:10}} onPress={() => navigation.navigate("PersonalChatWindow",{name:item.Firstname})}>
      
          <Text>{item.Firstname}</Text>
      </TouchableOpacity> 
 
          
          
 
  </View>)
    }}/> 
    </View> 
   
   :null}

  
   
  
    
  

  </View>

 
)
}

export default NewChat

const styles = StyleSheet.create({
    container: {
    
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      marginHorizontal:0,
      flexDirection:"row",
      padding:10,
      borderColor:"green",
      borderWidth:0.5,
      backgroundColor:"lightgrey",
      borderRadius:0,
      alignItems:"center",
      justifyContent:"flex-start",
      marginTop:0
  }
  });