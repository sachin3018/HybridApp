import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TextInput } from 'react-native';
import New from './Component/New'
export default class App extends React.Component {
 constructor(props){
   super(props);
   this.state = {
      name : ''
   }

 }

  render() {
    return (
      <View style={{flex: 1,  alignItems: 'center',}}>
        <TextInput
          placeholderTextColor = '#000'
          placeholder = 'enter your text'
          style = {styles.input}
          onChangeText ={ (text) => {this.setState( {name : text} )}}
        ></TextInput>
        <Text>
          {this.state.name
          .split(" ")
          .map(name => name && "🐼") 
          .join(" ")
          }
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 
 input : {
   borderWidth: 3,
   borderColor: '#23abab',
   marginTop: 40,
   paddingHorizontal: 10,
   borderRadius: 5,
 },
});


