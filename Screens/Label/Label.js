import { View, Text, FlatList, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'


const Label = ({navigation}) => {
  const [first, setfirst] = useState()

  const dummy =[{
    id:1,
    name:"mobile",
    images:require('../../assets/checkmark.png')
  },{
    id:2,
    name:"home",
    images:require('../../assets/checkmark.png')
  },{
    id:3,
    name:"work",
    images:require('../../assets/checkmark.png')
  },{
    id:4,
    name:"iPhone",
    images:require('../../assets/checkmark.png')
  },{
    id:5,
    name:"main",
    images:require('../../assets/checkmark.png')
  },{
    id:6,
    name:"other",
    images:require('../../assets/checkmark.png')
  }]

  // function Handler(x){
  //   // ()=>navigation.navigate("NewContact",{jissu:item.name})
  //   navigation.navigate("NewContact",{jissu:x})
  //   // setfirst(x)
    
  // }

  function Handler(x){
    // Pass and merge params back to home screen
    navigation.navigate({
      name: 'NewContact',
      params: { post: x },
      merge: true,
    });
  }
  return (
    <View>
    <View style={{backgroundColor:"white",margin:25,padding:20,borderRadius:20,height:250}}>
    <FlatList data={dummy} renderItem={({item})=>{
      return(

     <TouchableOpacity   onPress={Handler.bind(this,item.name)}>
<View style={{flexDirection:"row",justifyContent:"space-between"}}> 

       <Text>{item.name}</Text>
       
      
</View>
     
       <View style={{marginVertical:10,borderBottomColor:"lightgrey",borderBottomWidth:"1"}}>
         </View>
  
     </TouchableOpacity>
  
      )
    }}/>


         
         
         
         
         
         
         </View>
         <View style={{backgroundColor:"white",margin:25,padding:0,borderRadius:10,height:40,justifyContent:"center"}}>
    <Text style={{marginLeft:20}}>Add Custom Label</Text>
         </View>

    </View>


  

    
        

        
      
 

    
    
    
    
    
    
    
    

  )
}

export default Label