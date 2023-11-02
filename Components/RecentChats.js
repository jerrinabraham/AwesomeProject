import {View,Text, FlatList,Image, Pressable} from 'react-native'
import { useNavigation } from "@react-navigation/native"
import ListItem from './ListItem'
import OutSource from './OutSource'


function RecentChats(){

     const navigation = useNavigation()
    const DummyData=[{
        id:"e1",
        title:"Shikhu",
        image:'https://reactjs.org/logo-og.png'
       
    },{
        id:"e2",
        title:"jerrin",
        image:'https://reactjs.org/logo-og.png'
    }]

    const renderFunction=(itemData)=>{
 return <Pressable onPress={()=>{navigation.navigate("PersonalChatWindow",{name:itemData.item.title})}} >
             <View  style={{padding:10,marginVertical:20,flexDirection:"row"}}>
            
            <Image source={{uri:itemData.item.image}}  style={{width:30, height:30}} />
                  <View style={{borderBottomColor:"grey",borderBottomWidth:2,width:"100%"}}>

          <Text style={{marginLeft:10,marginBottom:10}}>{itemData.item.title}</Text>
          
                  </View>
                 
  
          </View>
            </Pressable>
    }


    return(
      

      
          <FlatList  data={DummyData} renderItem={renderFunction}/>

     

       
   
     
       
    )
}
export default RecentChats


// (itemData)=>{
//     const titles =itemData.item.title

//     return <OutSource onPress={()=>{navigation.navigate("PersonalChatWindow",{name:titles})}} title={itemData.item.title} image={itemData.item.image}/>
// }



{/* <FlatList data={displayed} renderItem={ (itemData)=>{
                                                    
    const mealId=itemData.item.id
    console.log("mealId",mealId)
    const selecting = MEALS.find(meal=>meal.id===mealId)
    console.log("selecting",selecting)
        
    return<MealItem image={itemData.item.imageUrl} 
                    title={itemData.item.title} 
                    duration={itemData.item.duration} 
                    touch={()=>navigation.navigate("MealDetail",{selectedf:selecting.title,mealId:itemData.item.id})}
            /> */}
