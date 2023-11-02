import {View,Text,StyleSheet,Button, TextInput, SafeAreaView} from 'react-native'
import React from 'react'
import ButtonIconTop from '../Components/ButtonIconTop'
import TextMiddleIcon from '../Components/TextMiddleIcon'
import RecentChats from '../Components/RecentChats'

function Settings({navigation}){
return(
<SafeAreaView>
    <View >
        <View style={{flexDirection:"row",padding:3}}>
                <Button title="Edit"/>
                <ButtonIconTop
                        onPress={() => navigation.navigate('NewChat')}
                            icon="create"
                            color="black"
                    />
                    </View>

        </View>
   
                       
                       
                       
                        <View style={{padding:10}}>
                                <Text style={styles.text}>
                                    Chats
                                </Text>
                        </View>
                        
                        
                        <View style={styles.input}>
                            <TextMiddleIcon icon="search"/>
                            <TextInput placeholder='Search'></TextInput>
                        </View>

                        
                        
                                <View style={{padding:10,flexDirection:"row",justifyContent:"space-between"}}>
                                    <Button  onPress={()=>{navigation.navigate("BroadcastLists")}} title="Broadcast Lists"/>
                                    <Button title="New Group"/>
                                </View>
                                <RecentChats/>
            
            
            </SafeAreaView>
            
            
        
)
}
export default Settings

const styles = StyleSheet.create({
    container: {
  
      flexDirection:"row",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      

    },
    text:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10,
      },
     input:{
        marginHorizontal:10,
        flexDirection:"row",
        padding:4,
        borderColor:"lightgrey",
        borderWidth:0.5,
        backgroundColor:"lightgrey",
        borderRadius:15
    },
  });
