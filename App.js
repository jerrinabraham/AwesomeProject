
import * as React from 'react';
import { View, Text,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import NewChat from './Screens/NewChat'
import ButtonIconTop from './Components/ButtonIconTop'
import Status from './Screens/Status';
import Calls from './Screens/Calls';
import Camera from './Screens/Camera';
import Chats from './Screens/Chats';
import BroadcastLists from './Screens/BroadcastLists';
import NewList from './Screens/NewList';
import Settings from './Screens/Settings';
import BottomIconDown from './Components/BottomIconDown';
import IconButton from './Components/IconButton';
import PersonalChatWindow from './Screens/PersonalChatWindow';
import IPersonalChatWindowIconTop from './Components/IPersonalChatWindowIconTop'
import PlusButton from './Components/PlusButton';



import { ScreenStackHeaderBackButtonImage } from 'react-native-screens';
import NewContact from './Screens/NewContact/NewContact'
import Recipients from './Screens/NewChat';
import Label from './Screens/Label/Label';
import Archived from './Screens/Archived/Archived';




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//screenOptions={{ headerShown: false }}
function Divert(){

  const [first, setfirst] = React.useState(true)

 
  return(
    <Tab.Navigator  screenOptions={({navigation})=>({
      

    tabBarStyle:{backgroundColor:"white"},
      tabBarActiveTintColor:"#0083ce",
  
      //tabBarInactiveTintColor:"transparent",
      
  
      headerRight: () => (
       
       <ButtonIconTop
       onPress={() => navigation.navigate('NewChat')}
         icon="create"
      
       />
    
     ),
   })}>
    <Tab.Screen name="Status" component={Status} options={{
          headerShown:false,

         tabBarIcon: ({ color, size }) => (
           <IconButton icon="disc-outline" size={23} color={color}/>
         ),
       }} />

<Tab.Screen name="Calls" component={Calls}  options={{
         headerShown:false,
         tabBarIcon: ({ color, size }) => (
           <BottomIconDown icon="call" size={32}  color={color} />
         ),
       }}/>

<Tab.Screen name="Camera" component={Camera} 
    options={{
      
      
      tabBarIcon: ({ color, size }) => (
        <BottomIconDown icon="camera" size={32} color={color} />
      ),
    }}/>

    
    <Tab.Screen name="Chats" component={first?Chats:Camera} options={{
        title:"Chats",
        tabBarIcon: ({ color, size }) => (
          <BottomIconDown icon="chatbubbles" size={32} color={color}/>
        ),
    
       }} />



   
    
   
    <Tab.Screen name="Settings" component={Settings} options={{
      
     headerShown:false,
      tabBarIcon: ({ color, size }) => (
        <BottomIconDown icon="cog-outline" size={32} color={color}/>
      ),
    }}/>
   
  </Tab.Navigator>
  )
}

function App() {

  
  return (
    <NavigationContainer >
   
   <Stack.Navigator>
       
       
       
       
       
       
       
       
       
       
       
       
       
       
   <Stack.Group>
        <Stack.Screen name="Divert" component={Divert} options={{headerShown:false}}/> 
        <Stack.Screen name="NewList" component={NewList} options={{ headerShown:false,presentation:"modal" }}/>
        <Stack.Screen name="BroadcastLists" component={BroadcastLists} />
       
       
        

        <Stack.Screen name="PlusButton" component={PlusButton} options={{title:"something",presentation:"modal",headerShown:false}}/>
        
    
   
          
        
        
           
           
        </Stack.Group> 

        <Stack.Screen name="Archived" component={Archived} />

           
        
            <Stack.Group screenOptions={{ presentation: 'modal',headerShown:true }}>
                    
                    <Stack.Screen name="NewChat" component={NewChat} options={({navigation})=>({
      
      
     
   
      
     
     headerRight: () => (
       
      <Button
      onPress={() => navigation.goBack()}
        title="X"
     
      />
   
    ),
   })}  /> 


                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                   
                    <Stack.Screen name="NewContact" component={NewContact}options={{headerShown:false}}/>
      <Stack.Screen name="Label" component={Label} options={({navigation})=>({
      
      
     
   
      
      headerLeft: () => (
       
       <Button
       onPress={() => navigation.goBack()}
         title="Cancel"
      
       />
    
     ),
     headerRight: () => (
       
      <Button
      onPress={() => navigation.goBack()}
        title="Done"
     
      />
   
    ),
   })}/>


<Stack.Screen name="PersonalChatWindow" component={PersonalChatWindow} options={({ route }) => ({ headerTitle: route.params.name,headerRight: () => (
  <IPersonalChatWindowIconTop onpress={()=>{}} onPressing={()=>{}} icon="call-outline" icons="ios-videocam-outline" size={22} sizes={22} color="grey" colors="grey"/>
  )})}/> 
 
                    </Stack.Group>
        
      



      </Stack.Navigator>
    </NavigationContainer>



    
  );









  
}

export default App;

