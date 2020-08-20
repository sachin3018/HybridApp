import React, { Component } from 'react';
import { View, Text, TextInput,StyleSheet,Alert, Keyboard,TouchableWithoutFeedback,Dimensions,TouchableOpacity } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
};



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rupeevalue : '',
      resultvalue : '0.0'
    };
  }

  convert = caption => {
    if(this.state.rupeevalue == "")
    {
      Alert.alert('Enter something')
    }
   
    let  valure = parseFloat(this.state.rupeevalue)*currencyPerRupee[caption]
   this.setState({resultvalue : valure.toFixed(2)})
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress = {Keyboard.dismiss}>
       <View style={styles.container}>
        <View style={styles.innercontainer}>
          <TextInput 
            style = {styles.textinput}
            selectionColor = '#fff'
            placeholderColor = '#000'
            placeholder = 'Enter the rupee'
            keyboardType='numeric'
            value = {this.state.rupeevalue}
            onChangeText = { rupeevalue => {this.setState({rupeevalue})}}/>
          <TextInput 
            style = {styles.textinput}
            placeholderColor = '#000'
            placeholder = 'Enter the rupee'
            editable={false} selectTextOnFocus={false}
          >{this.state.resultvalue}</TextInput>
        </View>
        <View>
          <View style={styles.buttoncontainer}>
          <TouchableOpacity
            onPress = { () => { this.convert('DOLLAR')}}
          >
            <Text
              style={styles.button}
            >$</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress = { () => { this.convert('EURO')}}>
            <Text
              style={styles.button}
            >Euro</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = { () => { this.convert('POUND')}}>
            <Text
              style={styles.button}
            >Pound</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttoncontainer}>
          <TouchableOpacity
          onPress = { () => { this.convert('AUSDOLLAR')}}>
            <Text
              style={styles.button}
            >Aus</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = { () => { this.convert('CANDOLLAR')}}>
            <Text
              style={styles.button}
            >Canada</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = { () => { this.convert('YEN')}}>
            <Text
              style={styles.button}
            >YEN</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttoncontainer}>
          <TouchableOpacity
          onPress = { () => { this.convert('DINAR')}}>
            <Text
              style={styles.button}
            >Dinar</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = { () => { this.convert('BITCOIN')}}>
            <Text
              style={styles.button}
            >Bitty</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress = { () => { this.convert('RUBEL')}}>
            <Text
              style={styles.button}
            >Rubel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>

    );
  }
}

const styles = StyleSheet.create({
  container  : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#2C3335',
  },
  innercontainer : {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',

  },
  textinput : {
    borderWidth: 2,
    borderColor: '#10A881',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    marginBottom: 10,
    marginHorizontal: 20,
    textAlign : 'center',
    color : '#fff',
  },
  button : {
    width : Dimensions.get('window').width/4,
    textAlign : 'center',
    fontSize: 15,
    backgroundColor : '#10A881',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#fff',
    paddingVertical: 10,
    borderRadius: 10,
    color : '#000',
    fontWeight  : 'bold'
  },
  buttoncontainer : {
    
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#2C3335',
  },
});