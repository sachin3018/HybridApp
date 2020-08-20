import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { createStore } from 'redux'
import { Provider} from 'react-redux'

import MyApp from './Src/MyApp'

const initalState = {
  reduxCounter : 4,
}
const reducer = (state = initalState,action) => {
  switch (action.type) {
    case 'INC_COUNTER': 
          return {reduxCounter : state.reduxCounter+1}
    case 'DEC_COUNTER':
          if(state.reduxCounter >= 1){
            return {reduxCounter : state.reduxCounter-1}
          }
          return state
  }
  return state
}
const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp/>        
      </Provider>
    )
  }
}

const styles = StyleSheet.create({

})