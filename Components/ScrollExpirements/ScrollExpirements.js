
import { View, Text, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const ScrollExpirements = () => {
  const [first, setfirst] = useState(true)
  const navigation = useNavigation()



  function handler(){
  
    setfirst(!first)
  }
 
  return (
    <ScrollView  onScrollBeginDrag={handler}  horizontal contentContainerStyle={{flex:1,alignItems:"center",justifyContent:"center",flexDirection:"row"}} onPress={handler}> 
 
      
      
      
      <View style={{flex:first==true? 0:5,backgroundColor:"red",width:"140%",height:40,marginVertical:20}}>
        <Text style={{textAlign:"center"}} >App</Text>
      </View>

      <Pressable onPress={()=>navigation.navigate("Archived")} style={{flex:1,backgroundColor:"green",height:40,width:400}}>
          
                <Text style={{textAlign:"center"}}>Archive</Text>
              </Pressable>
    
             
    </ScrollView>
  )
}

export default ScrollExpirements
//  <View style={{flex:1,backgroundColor:"green",height:40,width:400}}>










