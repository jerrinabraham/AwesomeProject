import { View,Text, TextInput,TouchableOpacity, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {firebase} from '../../config'

// import { Text, Divider, useTheme } from '@rneui/themed';

const NewContact = ({route}) => {

  const navigation = useNavigation()
  const [first, setfirst] = useState("mobile")
  const [second, setSecond] = useState(" >")
  const [third, setThird] = useState(true)
  const [Firstname, setFirstname] = useState("")
  const [Lastname, setLastname] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")


// const jerald =route.params.ids
// console.log("jerald",jerald)

// useEffect(() => {
//   // setfirst(route.params.jissu)
//   console.log("entere useEffect")
// },[])

useEffect(() => {
  if (route.params?.post) {
    // Post updated, do something with `route.params.post`
    // For example, send the post to the server
    setfirst(route.params?.post)
  }
}, [route.params?.post]);



const saveHandler=()=>{
  
 
  firebase.firestore().collection('todos')
  .add({
    Firstname:Firstname,
    Lastname:Lastname,
    phoneNumber:phoneNumber
  
  })

  .then(resp=>console.log(resp))
 

  .catch(err=>console.log(err))

  navigation.navigate("NewChat")
}




  
  return (
    <View style={{flex:1,backgroundColor:"lightgrey"}}>


      <View style={{flexDirection:"row",justifyContent:"space-evenly",alignItems:"center",marginTop:30}}>
        
        <TouchableOpacity onPress={()=>navigation.goBack()}>
               <Text style={{color:"#00a2ed",fontSize:18}}>Cancel</Text>
        </TouchableOpacity>

        

                    
        
        <Text style={{color:"#00a2ed",fontSize:25}}>New Contact</Text>
                    

                    
                       <TouchableOpacity onPress={saveHandler}>
                       <Text style={{color:"#00a2ed",fontSize:18}}>Save</Text>
                    </TouchableOpacity>
        
        
        
        
        
       
      
       
      </View>
    <View style={{marginVertical:25,backgroundColor:"white",margin:20,padding:10,borderRadius:10,height:110}}>
       



<View style={{justifyContent:"center",borderBottomColor:"lightgrey",borderBottomWidth:"1"}}>
  <View style={{marginVertical:10}}>
  <TextInput placeholder={"First Name"} onChangeText={(text)=>setFirstname(text)}/>
    </View>
         </View>


         <View style={{justifyContent:"center",borderBottomColor:"lightgrey",borderBottomWidth:"1"}}>
  <View style={{marginVertical:10}}>
  <TextInput placeholder={"Last Name"} onChangeText={(text)=>setLastname(text)}/>
    </View>
         </View>





         
  

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   
    </View>


    <View style={{marginVertical:25,backgroundColor:"white",margin:20,padding:25,borderRadius:10}}>
        <View style={{flexDirection:"row",justifyContent:"space-around",alignItems:"center"}}>
                     <View style={{marginBottom:10}}>

                     <Text>Phone</Text>
                     </View>


        <View style={{marginLeft:10,borderBottomColor:"lightgrey",borderBottomWidth:"1",flex:1}}>
            <View style={{marginBottom:10}}>
            <TextInput placeholder='India' onChangeText={(text)=>setPhoneNumber(text)}/>
            </View>
       
        </View>









                     
        

        
     
     
      </View>

      

      <TouchableOpacity style={{marginTop:10,flexDirection:"row"}} onPress={()=>navigation.navigate("Label")}>
      
   <Text style={{color:"#00a2ed"}}>{first}</Text>
       <Text style={{color:"grey"}}>{second}</Text>

      

  


     {/* <TextInput style={{marginLeft:10}} /> */}
</TouchableOpacity>
     

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   
    </View>

   

    <View style={{marginVertical:25,backgroundColor:"white",margin:20,padding:15,borderRadius:10}}>
    <TouchableOpacity onPress={saveHandler}><Text style={{color:"#00a2ed"}}>Add field{Firstname}</Text></TouchableOpacity>

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
   
    </View>

    </View>
  )
}

export default NewContact





  // await firebase.firestore().collection('todos')
  // .add({name:"pakkil"})
  // .then(resp=>console.log(resp))

  // .catch(err=>console.log(err))