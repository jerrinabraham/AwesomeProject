import {FlatList,Image,View,Text, Pressable} from 'react-native'
function ListItem(){


    const DummyData=[{
        id:"e1",
        title:"chechi",
        image:'https://reactjs.org/logo-og.png'
       
    },{
        id:"e2",
        title:"jerrin",
        image:'https://reactjs.org/logo-og.png'
    }]
    const renderFunction=(itemData)=>{
 
        <View  style={{padding:10,marginVertical:20,flexDirection:"row"}}>
        
          <Image source={{uri:itemData.item.image}}  style={{width:30, height:30}} />
                <View style={{borderBottomColor:"grey",borderBottomWidth:2,width:"100%"}}>

        <Text style={{marginLeft:10,marginBottom:10}}>{itemData.item.title}</Text>
     
        
                </View>
               

        </View>
    }

    // const x =itemData.item.title
    return (
  
        <Pressable onPress={()=>navigation.navigate("PersonalChatWindow",{name:"ji"})}>
            <FlatList  data={DummyData} renderItem={renderFunction}/>
            </Pressable>
       
    )

}
export default ListItem