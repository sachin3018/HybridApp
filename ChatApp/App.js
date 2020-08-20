import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './component/Home'
import Chat from './component/Chat'

const stack = createStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <stack.Navigator
        screenOptions = {{
          headerShown : false
        }}
      >
        <stack.Screen
          name = "Home"
          component = {Home}
        />
        <stack.Screen
          name = "Chat"
          component = {Chat}
        />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;