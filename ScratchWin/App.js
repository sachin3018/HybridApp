import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { Button } from 'native-base'
//make array of size 25

let lottaryArray = new Array(25).fill('empty');


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randonNumber : "",
      count : 0
    };
  }

  //method running before the app starts
  componentDidMount(){
    //call funtion for genrating random number
    this.setState({randonNumber : this.genrateRandomNumber()})
    
  }


  genrateRandomNumber = () => {
    //genrate random number  
    let random = Math.floor((Math.random()*25));
    this.setState({randonNumber : random, isScratched : true})
    return random;
  }


  scratchItem = number => {
    //check whether user is lucky or not
    if(number === this.state.randonNumber){
        lottaryArray[number] = "lucky";
        Alert.alert("You Won")
    }else{
      lottaryArray[number] = "unlucky";
    }
    this.setState({count : this.state.count + 1})
    this.forceUpdate();
  }

  scratchItemIcon = number => {
    //different icon for the block
    if(lottaryArray[number] === "lucky"){
      return "dollar";
    }else if(lottaryArray[number] === "unlucky"){
      return "frown-o";
    }
    
    return "circle"
  }

  scratchItemColor = number => {
    //color of the scaratch item
    if(lottaryArray[number] === "lucky"){
      return "green";
    }else if(lottaryArray[number] === "unlucky"){
      return "red";
    }
    
    return "black"
  }

  showAll = () => {
    //show all blocks
    lottaryArray.fill('unlucky')
    lottaryArray[this.state.randonNumber] = 'lucky'

    this.forceUpdate()
  }

  resetGame = () => {
    //reset game
    this.setState({randonNumber : this.genrateRandomNumber(),count : 0}, () => {
      lottaryArray.fill('empty');
      this.forceUpdate();
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.rowItem}>
            <TouchableOpacity
              onPress = { () => this.scratchItem(0)}
              disabled = {this.state.count >= 5 ? true : false }
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(0)}
                name = {this.scratchItemIcon(0)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(1)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(1)}
                name = {this.scratchItemIcon(1)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(2)}
              style={styles.item}>
              <FontAwesome
                color = {this.scratchItemColor(2)}
                name = {this.scratchItemIcon(2)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(3)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(3)}
                name = {this.scratchItemIcon(3)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(4)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(4)}
                name = {this.scratchItemIcon(4)} 
                size = {50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity
              onPress = { () => this.scratchItem(5)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(5)}
                name = {this.scratchItemIcon(5)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(6)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(6)}
                name = {this.scratchItemIcon(6)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(7)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(7)}
                name = {this.scratchItemIcon(7)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(8)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(8)}
                name = {this.scratchItemIcon(8)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(9)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(9)}
                name = {this.scratchItemIcon(9)} 
                size = {50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity
              onPress = { () => this.scratchItem(10)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(10)}
                name = {this.scratchItemIcon(10)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(11)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(11)}
                name = {this.scratchItemIcon(11)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(12)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(12)}
                name = {this.scratchItemIcon(12)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(13)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(13)}
                name = {this.scratchItemIcon(13)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(14)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(14)}
                name = {this.scratchItemIcon(14)} 
                size = {50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity
              onPress = { () => this.scratchItem(15)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(15)}
                name = {this.scratchItemIcon(15)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(16)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(16)}
                name = {this.scratchItemIcon(16)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(17)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(17)}
                name = {this.scratchItemIcon(17)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(18)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(18)}
                name = {this.scratchItemIcon(18)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(19)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(19)}
                name = {this.scratchItemIcon(19)} 
                size = {50}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.rowItem}>
            <TouchableOpacity
              onPress = { () => this.scratchItem(20)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(20)}
                name = {this.scratchItemIcon(20)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(21)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(21)}
                name = {this.scratchItemIcon(21)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(22)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(22)}
                name = {this.scratchItemIcon(22)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(23)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(23)}
                name = {this.scratchItemIcon(23)} 
                size = {50}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress = { () => this.scratchItem(24)}
              style={styles.item}
              disabled = {this.state.count >= 5 ? true : false }>
              <FontAwesome
                color = {this.scratchItemColor(24)}
                name = {this.scratchItemIcon(24)} 
                size = {50}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Button 
          block 
          success 
          style={styles.button}
          onPress = { () => {this.showAll()}}>
            <Text style={styles.buttonText}>Show All</Text>
        </Button>
        <Button 
          block 
          success 
          style={styles.buttontwo}
          onPress = { () => {this.resetGame()}}>
            <Text style={styles.buttonText}>Reset</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid : {

  },
  rowItem : {
      flexDirection : 'row',
  },
  item : {
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor : '#000',
    minWidth : 70,
  },
  button : {
    marginHorizontal : 20,
    marginVertical : 15,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : '#fff',
    backgroundColor : '#3C40C6'
  },
  buttonText : {
    fontSize: 20,
    color : '#fff',
  },
  buttontwo : {
    marginHorizontal : 20,
    marginVertical : 5,
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : '#fff',
    backgroundColor : '#B83227'
  },
  label : {
    marginVertical : 10,
    padding: 10,
    height : 50,
    borderRadius: 5,
    borderWidth: 2,
    borderColor : '#fff',
    width : Dimensions.get('window').width,
    backgroundColor : '#B83227'
  },
  labelText : {
    textAlign : 'center'
  },
});
