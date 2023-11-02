import {View,Text, TextInput,FlatList, ScrollView,StyleSheet,ImageBackground} from 'react-native'
import TextMiddleIcon from '../Components/TextMiddleIcon'
import BottomIconDown from '../Components/BottomIconDown'
const image = { uri: "https://cdn.wallpapersafari.com/4/11/WofyVJ.png" };
function PersonalChatWindow({navigation}){
    return(
    
   


                        
                        
        
                        <View style={{flex:1,justifyContent:"flex-end",marginBottom:20,backgroundColor:"white"}}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>





                                <View style={{flexDirection:"row",marginTop:"180%",height:70,backgroundColor:"lightgrey"}}>
                                <BottomIconDown icon="add" size={28} color="#0083ce" onPress={()=>navigation.navigate("PlusButton")} />  
                                            <View style={styles.input}>
                                                    
                                                <TextInput style={{backgroundColor:"white"}}placeholder='Enter Text'></TextInput>
                                                <TextMiddleIcon icon="document-outline"/>
                                            </View>

                                        <BottomIconDown icon="camera-outline" size={28} color="#0083ce" />  
                                        <BottomIconDown icon="mic-outline" size={28} color="#0083ce" />  
                                        
                                </View>


                            
                            
                                 


                               
                                </ImageBackground>
                        </View>
                       

                        


  
       )
}

export default PersonalChatWindow

const styles=  StyleSheet.create({

    input:{
        width:"65%",
       
        marginHorizontal:10,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:4,
        marginTop:25,
        height:25,
        borderColor:"white",
        borderWidth:1,
        backgroundColor:"white",
        borderRadius:15
    },
      image: {
    flex: 1,
    width:"100%",
    justifyContent: "center"
  },

})
