import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import {  } from 'react-navigation';
import  Home from './Screens/Home'
import Follow from './Screens/Follow';
import ShowLikes from './Screens/ShowLikes';


const stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen 
          name = "Home" 
          component={Home}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              alignSelf: 'center',
            },
          }}
          />
          <stack.Screen
          name = "Follow"
          component={Follow}
          />
          <stack.Screen
          name = "ShowLikes"
          component = {ShowLikes}
          />
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App