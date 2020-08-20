import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MyApp from './Src/MyApp'


const initialState = {
  myCount : 4
}

const reducer = (state = initialState,action) => {
  switch (action.type) {
    case 'INC_COUNT':
          return { myCount : state.myCount + 1 }
    case 'DEC_COUNT' : 
          if(state.myCount > 0)
              return { myCount : state.myCount-1 }
          else 
              return state
  }
  return state
}

const store = createStore(reducer)

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <MyApp/>
      </Provider>
    )
  }
}
