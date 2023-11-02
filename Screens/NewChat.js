
import React from 'react'
import {View,Text,StyleSheet,Button, TextInput,Pressable} from 'react-native'
import TextMiddleIcon from '../Components/TextMiddleIcon'
import NewChatIcons from '../Components/NewChatIcons'
function Recipients(){
 return ( 
  <View>


 <View style={styles.input}>
  <TextMiddleIcon icon="search"/>
  <TextInput placeholder='Search'></TextInput>
  
</View>

<View style={{marginTop:20,}}>
                      
                  <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}}>
                  <View style={{marginVertical:12}}><NewChatIcons icon="people"/></View>
                          <View style={{alignItems:"flex-start"}}><Button style={{color:"#00a2ed"}} title="New Group"/></View>

                          </View>



                          <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:"1",marginBottom:15}}>
                  <View style={{marginVertical:12}}><NewChatIcons icon="person"/></View>
                          <View style={{alignItems:"flex-start"}}><Button style={{color:"#00a2ed"}} title="New Contact"/></View>

                          </View>
                        
                    
                    
               
                   
                      
                     </View>







  <View style={{marginTop:10,borderBottomColor:"grey",borderBottomWidth:"1"}}>
    <Text style={{color:"grey",marginBottom:10}}>Frequently Contacted</Text>
  </View>
  </View>
)
}

export default Recipients

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      marginHorizontal:10,
      flexDirection:"row",
      padding:4,
      borderColor:"lightgrey",
      borderWidth:0.5,
      backgroundColor:"lightgrey",
      borderRadius:15
  }
  });