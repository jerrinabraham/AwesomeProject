
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




const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
//screenOptions={{ headerShown: false }}
function Divert(){
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
    <Tab.Screen name="Chats" component={Chats} options={{
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
        
        <Stack.Screen name="Divert" component={Divert} options={{headerShown:false}}/> 
        <Stack.Screen name="NewChat" component={NewChat} options={{title:"New Chat",presentation:"modal"}}/> 
        <Stack.Screen name="NewList" component={NewList} options={{ headerShown:false,presentation:"modal" }}/>
        <Stack.Screen name="BroadcastLists" component={BroadcastLists} />
        <Stack.Screen name="PlusButton" component={PlusButton} options={{title:"something",presentation:"modal",headerShown:false}}/>
        <Stack.Screen name="PersonalChatWindow" component={PersonalChatWindow} options={({ route }) => ({ headerTitle: route.params.name,headerRight: () => (
            <IPersonalChatWindowIconTop onpress={()=>{}} onPressing={()=>{}} icon="call-outline" icons="ios-videocam-outline" size={22} sizes={22} color="grey" colors="grey"/>
            )})}/>
      



      </Stack.Navigator>
    </NavigationContainer>



    
  );









  
}

export default App;