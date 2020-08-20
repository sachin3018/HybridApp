import React, { Component } from 'react'
import { Text, View } from 'react-native'
import * as firebase from 'firebase'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from './screen/HomeScreen'
import LoginScreen from './screen/LoginScreen'
import SignupScreen from './screen/SignupScreen'
import LoadingScreen from './screen/LoadingScreen'

const firebaseConfig = {
  apiKey: "AIzaSyDNMob-kkP9XbQzHVsTxaMuXpoXiK59O5I",
  authDomain: "reactnative-f466b.firebaseapp.com",
  databaseURL: "https://reactnative-f466b.firebaseio.com",
  projectId: "reactnative-f466b",
  storageBucket: "reactnative-f466b.appspot.com",
  messagingSenderId: "89361873195",
  appId: "1:89361873195:web:12162c1e0a42bdb9f7ad6e",
  measurementId: "G-8QVK0GB6CM"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const stack = createStackNavigator()

function App() {
  return(
      <NavigationContainer>
        <stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >

        <stack.Screen
            name = "Loading"
            component = {LoadingScreen}
          />

          <stack.Screen
            name = "Home"
            component = {HomeScreen}
          />
          <stack.Screen
            name = "Login"
            component = {LoginScreen}
           
          />
          <stack.Screen
            name = "Signup"
            component = {SignupScreen}
          />

          
         
          
        </stack.Navigator>
      </NavigationContainer>
  )
}

export default App;
