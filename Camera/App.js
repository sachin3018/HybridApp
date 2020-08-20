import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import  Home from './Screen/Home'
import Camerapage from './Screen/Camerapage';
const Stack = createStackNavigator();

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name= "Home"
          component = {Home}
          />
        <Stack.Screen
          name= "Camera"
          component = {Camerapage}
          initialParams = {pic = "sachin"}
          />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App