import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Employee from './src/Employee'
const empstate = {

  1:{
    empid : 1,
    empname : "sachin singh",
    salary : 10000
  },
  2:{
    empid : 2,
    empname : "shesha singh",
    salary : 20000
  },
  3:{
    empid : 3,
    empname : "seema singh",
    salary : 30000
  },
  4:{
    empid : 4,
    empname : "subodh singh",
    salary : 40000
  },
  5:{
    empid : 5,
    empname : "nageshwar singh",
    salary : 50000
  },
  6:{
    empid : 6,
    empname : "nageshwar singh",
    salary : 50000
  },
  7:{
    empid : 7,
    empname : "nageshwar singh",
    salary : 50000
  },
  8:{
    empid : 8,
    empname : "nageshwar singh",
    salary : 50000
  },
  9:{
    empid : 9,
    empname : "nageshwar singh",
    salary : 50000
  },
}
//step 2
const reducer = (state = empstate,action) => {
  let increment,newSalary,oldsalary;
  let employeeObject;

  if(action.id){
    oldsalary = state[action.id].salary;
    increment = oldsalary * 0.2;
  }

  switch (action.type) {
    case 'GOOD_PERFORMANCE':
          newSalary = oldsalary + increment;
          employeeObject = state[action.id]
          employeeObject.salary = newSalary
          return Object.assign({},state)

    case 'BAD_PERFORMANCE':
          newSalary = oldsalary - increment;
          employeeObject = state[action.id]
          employeeObject.salary = newSalary
          return Object.assign({},state)
     
  }
  return state
}


// step 1
const store = createStore(reducer)


export default function App() {
  return (
   <Provider store = {store}>
     <Employee/>
   </Provider>
  );
}

