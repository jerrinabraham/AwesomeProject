import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'


const Card = () => {
  return (

    <View>
 <View style={{margin:25,backgroundColor:"lightgrey",height:150,borderRadius:20}}>
      
      <View style={{flex:1,justifyContent:"center"}}>




      <View style={{marginLeft:10,marginTop:0,marginRight:10}}>

<Text>New Group</Text>




                <View style={{flexDirection: 'row', alignItems: 'center',marginVertical:10}}>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            <View>
                {/* <Text style={{width: 50, textAlign: 'center'}}></Text> */}
            </View>
            <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
            </View>

</View>





<View style={{marginLeft:10,marginTop:0,marginRight:10}}>

<TouchableOpacity>
    <Text>New Contact</Text>
</TouchableOpacity>




<View style={{flexDirection: 'row', alignItems: 'center',marginVertical:10}}>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
<View>
{/* <Text style={{width: 50, textAlign: 'center'}}></Text> */}
</View>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

</View> 

<View style={{marginLeft:10,marginTop:0,marginRight:10}}>

<Text style={{}}>New Community</Text>




<View style={{flexDirection: 'row', alignItems: 'center',marginVertical:10}}>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
<View>
{/* <Text style={{width: 50, textAlign: 'center'}}></Text> */}
</View>
<View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
</View>

</View>
     
      </View>
           
            









    </View>
{/* <View style={{marginLeft:35,marginBottom:10}}>

<Text>Frequently Contacted</Text>
</View>
    <View style={{marginLeft:25,marginRight:25,backgroundColor:"lightgrey",height:150,borderRadius:20}}>

    </View> */}
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     














    </View>
   
  )
}

export default Card