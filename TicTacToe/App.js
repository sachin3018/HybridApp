import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import {Entypo} from '@expo/vector-icons'
import { Button } from 'native-base'

var itemArray = new Array(9).fill("empty");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCrossed : false,
      winMessage : ""
    };
  }
  
  drawItem = itemNumber => {
    // draw zero or cross
    if(itemArray[itemNumber] === "empty" && this.state.winMessage === ""){
     // Alert.alert("entered")
      itemArray[itemNumber] = this.state.isCrossed;
      this.setState({isCrossed : !itemArray[itemNumber]}, () => {})
    }

    // wining logic 
    this.winGame();
  }

  chooseItemIcon = itemNumber => {
    //decide icon
    if( itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber] ? "cross" : "circle"
    }

    return "pencil"
  }

  chooseItemColor = itemNumber => {
    //item color
    if( itemArray[itemNumber] !== "empty"){
      return itemArray[itemNumber] ? "red" : "green"
    }

    return "black"
  }

  resetGame = () => {
    //reset the game
    itemArray.fill("empty")
    this.setState({ winMessage : ""})
    // force update to elements
    this.forceUpdate()
  }

  winGame = () => {
    //winning logic
    if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMessage: (itemArray[3] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[6] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMessage: (itemArray[1] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winMessage: (itemArray[0] ? "Cross" : "Circle").concat(" win")
      });
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winMessage: (itemArray[2] ? "Cross" : "Circle").concat(" win")
      });
    }
  }
  
  render() {
    return (
      <View style = {styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => {this.drawItem(0)}}>
                <Entypo 
                name = {this.chooseItemIcon(0)}
                size = {50}
                color = {this.chooseItemColor(0)}/>
              </TouchableOpacity> 
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => {this.drawItem(1)}}>
                <Entypo 
                name = {this.chooseItemIcon(1)}
                size = {50}
                color = {this.chooseItemColor(1)}/>
              </TouchableOpacity> 
            </View>
            <View style={styles.item}>
              <TouchableOpacity
              onPress={() => {this.drawItem(2)}}>
                <Entypo 
                name = {this.chooseItemIcon(2)}
                size = {50}
                color = {this.chooseItemColor(2)}/>
              </TouchableOpacity> 
            </View>
          </View>
          <View style={styles.row}>
          <View style={styles.item}>
            <TouchableOpacity
            onPress={() => {this.drawItem(3)}}>
              <Entypo 
              name = {this.chooseItemIcon(3)}
              size = {50}
              color = {this.chooseItemColor(3)}/>
            </TouchableOpacity> 
          </View>
          <View style={styles.item}>
            <TouchableOpacity
            onPress={() => {this.drawItem(4)}}>
              <Entypo 
              name = {this.chooseItemIcon(4)}
              size = {50}
              color = {this.chooseItemColor(4)}/>
            </TouchableOpacity> 
          </View>
          <View style={styles.item}>
            <TouchableOpacity
            onPress={() => {this.drawItem(5)}}>
              <Entypo 
              name = {this.chooseItemIcon(5)}
              size = {50}
              color = {this.chooseItemColor(5)}/>
            </TouchableOpacity> 
          </View>
        </View>
          <View style={styles.row}>
        <View style={styles.item}>
          <TouchableOpacity
          onPress={() => {this.drawItem(6)}}>
            <Entypo 
            name = {this.chooseItemIcon(6)}
            size = {50}
            color = {this.chooseItemColor(6)}/>
          </TouchableOpacity> 
        </View>
        <View style={styles.item}>
          <TouchableOpacity
          onPress={() => {this.drawItem(7)}}>
            <Entypo 
            name = {this.chooseItemIcon(7)}
            size = {50}
            color = {this.chooseItemColor(7)}/>
          </TouchableOpacity> 
        </View>
        <View style={styles.item}>
          <TouchableOpacity
          onPress={() => {this.drawItem(8)}}>
            <Entypo 
            name = {this.chooseItemIcon(8)}
            size = {50}
            color = {this.chooseItemColor(8)}/>
          </TouchableOpacity> 
        </View>
      </View>
        </View>
        <Text style={styles.wintext}>{this.state.winMessage}</Text>
        <Button full rounded primary style={styles.button} onPress={() => this.resetGame()}>
          <Text style={styles.btntext}>RESET GAME</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid : {

  },
  row : {
    flexDirection: 'row',
  },
  item : {
    borderWidth: 2,
    borderColor: '#000',
    padding: 30,
  },
  wintext : {
    fontSize: 25,
    fontWeight: 'bold',
    color : "#000",
    marginTop: 10,
  },
  button: {
    margin: 20,
    padding: 10,
    marginTop: 30
  },
  btntext: {
    color: "#FFF",
    fontSize: 25,
  }
});