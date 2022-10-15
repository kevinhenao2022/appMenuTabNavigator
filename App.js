import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Chat from './components/Chat';
import Contacts from './components/Contacts';
import Album from './components/Album';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' screenOptions={{tabBarActiveTintColor:'red', 
        tabBarActiveTintColor:'purple', tabBarActiveBackgroundColor:'pink'}}>
        <Tab.Screen name='Home'component={HomeScreen} options={{title:'Inicio', tabBarIcon:({color, size})=>(
          <Ionicons name='home' color={'black'} size = {18}/>
        )}}/>
        <Tab.Screen name='Settings'component={SettingsScreen} options = {{title:'Configuracion', tabBarIcon:({color, size})=>(
          <Ionicons name='settings' color={'blue'} size = {18}/>
        )}}/>
        <Tab.Screen name='Carrito'component={ShoppingScreens} options = {{title:'Carrito', tabBarIcon:({color, size})=>(
          <Ionicons name='cart-outline' color={'red'} size = {18}/>
        )}}/>
        <Tab.Screen name='Contacts'component={ContactsScreens} options = {{title:'Contactos', tabBarIcon:({color, size})=>(
          <Ionicons name='person-add-outline' color={'green'} size = {18}/>
        )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}



