import React, { Component } from 'react';
import { View, Text, Button, StyleSheet,  TouchableOpacity, Dimensions } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomColor : null,
      title : '',
      randomButton : null
    };
  }

  random = () => {
    return(
      'rgb('+
        Math.floor(Math.random()*255) +
        ","+
        Math.floor(Math.random()*255) +
        ","+
        Math.floor(Math.random()*255) +
        ")"
    )
  }

  buttonPressed = () => {
    this.setState({randomColor : this.random()})
    this.buttonBackground();
  }

  buttonBackground = () => {
    this.setState({randomButton : this.random()})
  }

  render() {
    return (
      <View style= {[styles.container,{ backgroundColor : this.state.randomColor,}]}>
        <Button
          title = {this.state.title}
          onPress = {() => {this.setState({ title : "singh"})}}
        >
        </Button>
        <TouchableOpacity
        onPress = {() => {this.buttonPressed()}}>
          <Text style={[styles.text, {backgroundColor : this.state.randomButton}]}>sachin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    width : Dimensions.get('window').width,
    textAlign: 'center',
    backgroundColor : "#BB2CD9",
    marginTop: 10, 
    paddingVertical: 10, 
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
  },
});