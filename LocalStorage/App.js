import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//import screens

import HomeScreen from './Screens/HomeScreen'
import AddContactScreen from './Screens/AddContactScreen'
import EditContactScreen from './Screens/EditContactScreen'
import ViewContactScreen from './Screens/ViewContactScreen'


//import react navigation and stack 

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//creating stack object 

const Stack = createStackNavigator()

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        
      >
        <Stack.Screen
          name = "Home"
          component = {HomeScreen}
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
        <Stack.Screen
          name = "EditContact"
          component = {EditContactScreen}
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
        <Stack.Screen
          name="AddContact"
          component={AddContactScreen}
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
        <Stack.Screen
          name = "ViewContact"
          component = {ViewContactScreen}
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
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
