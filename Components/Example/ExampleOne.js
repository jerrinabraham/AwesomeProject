import { View, Text, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import NewChatIcons from '../NewChatIcons'
import ScrollExpirements from '../ScrollExpirements/ScrollExpirements';


const ExampleOne = () => {
   const navigation = useNavigation()
  return (
    <View>

    <View style={{padding:10}}>
          
          <View style={{flexDirection:"row",borderBottomColor:"grey",borderBottomWidth:"1",marginVertical:25}}>
                     <NewChatIcons icon="people"/>
                     <Pressable onPress={()=>navigation.navigate("Archived")}><Text style={{marginLeft:20,fontSize:15}}>Archived</Text></Pressable>
            </View>

                
                
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottomColor:"grey",borderBottomWidth:"1"}}>
                <Pressable onPress={()=>navigation.navigate("BroadcastLists")}><Text  style={{color:"#00a2ed",marginBottom:12}}>Broadcast Lists</Text></Pressable>
                <Pressable><Text  style={{color:"#00a2ed",marginBottom:12}}>New Group</Text></Pressable>
                </View>



               
    
    
    </View>

    <View>
                    <ScrollExpirements/>
                </View>
    </View>
    
    
    
    
  

  )
}

export default ExampleOne


//style={{borderBottomColor:"grey",borderBottomWidth:"1"}}