import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Image,Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pic1link : require('./Component/Image/dice3.png'),
      pic2link : require('./Component/Image/dice3.png')
    };
  }
  
  randomNumberGenrator = () => {
    return(
      Math.floor(Math.random()*6)+1
    )
  }

  play = () => {
    let n = this.randomNumberGenrator()
    let m = this.randomNumberGenrator()
    
    
    let src1 = null
    let src2 = null
    
    
    switch(n){
      case 1 : src1 = require('./Component/Image/dice1.png')
              break;
      case 2 : src1 = require('./Component/Image/dice2.png')
              break;
      case 3 : src1 = require('./Component/Image/dice3.png')
              break;
      case 4 : src1 = require('./Component/Image/dice4.png')
              break;
      case 5 : src1 = require('./Component/Image/dice5.png')
              break;
      case 6 : src1 = require('./Component/Image/dice6.png')
              break;
      default : src = require('./Component/Image/dice1.png')
    }

    switch(m){
      case 1 : src2 = require('./Component/Image/dice1.png')
              break;
      case 2 : src2 = require('./Component/Image/dice2.png')
              break;
      case 3 : src2 = require('./Component/Image/dice3.png')
              break;
      case 4 : src2 = require('./Component/Image/dice4.png')
              break;
      case 5 : src2 = require('./Component/Image/dice5.png')
              break;
      case 6 : src2 = require('./Component/Image/dice6.png')
              break;
      default : src = require('./Component/Image/dice1.png')
    }


    this.setState({pic1link : src1})
    this.setState({pic2link : src2})
  }

  render() {
    return (
      <View style = {styles.container}>
      <View style={{flexDirection: 'row',}}>
        <Image
        source = {this.state.pic1link}
        style={{width : 150,height : 150,marginRight: 5,}}
        />

        <Image
        source = {this.state.pic2link}
        style={{width : 150,height : 150,marginLeft: 5,}}
        />
      </View>
      <TouchableOpacity
        onPress = {() => {this.play()}}
        >
        <Text style={styles.button}>  Play Game </Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#E74262",
  },
  button : {
    marginTop: 50,
    backgroundColor : '#BB2CD9',
    color : '#fff',
    borderWidth: 2,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize : 20,
    borderRadius: 5,

  },
});
