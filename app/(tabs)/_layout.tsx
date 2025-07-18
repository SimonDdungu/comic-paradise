import { Tabs } from 'expo-router'

import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


const _layout = () => {
  return (
    <Tabs screenOptions={{tabBarShowLabel: false, 
    tabBarItemStyle: {width: "100%", height: "100%", paddingVertical: 8, justifyContent: "center", alignItems: "center"},
    tabBarStyle: {backgroundColor: "black", borderRadius: 50, marginHorizontal: 20, marginBottom: 36, height: 57, position: "absolute", overflow:"hidden", borderWidth: 1, borderColor: "#0f0d23" } 
    }} >
        <Tabs.Screen name='index' options={{headerShown: false, title: 'Home', tabBarIcon: ({color}) => <Entypo name="home" size={24} color={color} />}} />   
        <Tabs.Screen name='search' options={{headerShown: false, title: 'Search', tabBarIcon: ({color}) => <AntDesign name="search1" size={24} color={color} />}} />   
        <Tabs.Screen name='saved' options={{headerShown: false, title: 'Saved',tabBarIcon: ({color}) => <Feather name="bookmark" size={24} color={color} />}} />   
        <Tabs.Screen name='profile' options={{headerShown: false, title: 'Profile',tabBarIcon: ({color}) => <Feather name="user" size={24} color={color} />}} />   
    </Tabs>
  )
}

export default _layout