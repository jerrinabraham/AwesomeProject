import {View,Image,Text, Pressable} from 'react-native'
function OutSource({image,title,onPress}){
    return (

       
        <View  style={{padding:10,marginVertical:20,flexDirection:"row"}}>
            
              <Image source={{uri:image}}  style={{width:30, height:30}} />
                    <View style={{borderBottomColor:"grey",borderBottomWidth:2,width:"100%"}}>

            <Text style={{marginLeft:10,marginBottom:10}}>{title}</Text>
            
                    </View>
                   
    
            </View>
           
    )
    }
export default OutSource