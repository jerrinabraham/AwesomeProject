import React,{useState} from 'react'
import {View,Text,StyleSheet,TextInput, Button} from 'react-native'
import TextMiddleIcon from '../Components/TextMiddleIcon'
function NewList({navigation}){
    const[modalClose,setModalClose] = useState(false)

    function modalCloseHandler(){
        setModalClose(true)
    }

    if(modalClose){
        navigation.navigate("BroadcastLists")
    }
 return ( <View style={styles.container}>
    <View>

        <Text style={{textAlign:"center",fontWeight:"700",fontSize:"16"}}>Recipients</Text>
    </View>

     
     <View style={{flexDirection:"row",justifyContent:"space-between"}}>
     <Button title="cancel" onPress={modalCloseHandler}/>
     <Button title="Create"/>
     </View>
     <View style={styles.input}>
                            <TextMiddleIcon icon="search"/>
                            <TextInput placeholder='Search'></TextInput>
                        </View>
    <View style={{marginTop:55}}>
        <Text style={styles.text1}>Only contacts with +91-xxxxxxxxxx in their address</Text>
        <Text style={styles.text1}>book will recieve your broadcast messages</Text>
    </View>

     
    
 </View>)
}

export default NewList

const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:25,
   

      backgroundColor: '#fff',
   
    
    },
    input:{
        marginHorizontal:0,
        marginTop:10,
        flexDirection:"row",
        padding:4,
        borderColor:"lightgrey",
        borderWidth:0.5,
        backgroundColor:"lightgrey",
        borderRadius:15
    },
    text1:{
        
        fontSize:13,
        textAlign:"center",
        fontWeight:"bold",
        color:"grey"
    }
  });