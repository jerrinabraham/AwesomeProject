import {View,Text,StyleSheet, ScrollView, Button} from 'react-native'

function BroadcastLists({navigation}){
    return (
        <View style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
       
       
        

<View style={{marginVertical:"70%"}}>
<Text style={styles.text1}>You should use broadcast lists to message</Text>
<Text style={styles.text1}>multiple people at once</Text>
<View style={{marginVertical:10}}>
<Text style={styles.text1}>Only contacts with +91-xxxxxxxxxx in their</Text>
<Text style={styles.text1}>address book will recieve your broadcast</Text>
<Text style={styles.text1}>messages</Text>
</View>

<View style={{marginVertical:"70%"}}>
    <Button title="New List" onPress={()=>navigation.navigate("NewList")}/>
</View>

</View>





</View>
    )
}

export default BroadcastLists

const styles= StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center"
       
    },
    text1:{
        
        fontSize:13,
        textAlign:"center",
        fontWeight:"bold",
        color:"grey"
    }
})