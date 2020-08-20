import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const listBack = {
  1 : "#FF3E4D",
  2 : "#74B9FF",
  3 : "#2ecc72",
  4 : "#A3CB37",
  5 : "#FAC42F",
  6 : "#99AAAB",
  7 : "#E74265",
  8 : "#F5BCBA",
  9 : "#23CCCD",
  10 : "#1287A5",
};

const listSound = {
  one : require('./Component/Sound/one.wav') ,
  two : require('./Component/Sound/two.wav') ,
  three : require('./Component/Sound/three.wav') ,
  four : require('./Component/Sound/four.wav') ,
  five : require('./Component/Sound/five.wav') ,
  six : require('./Component/Sound/six.wav') ,
  seven : require('./Component/Sound/seven.wav') ,
  eight : require('./Component/Sound/eight.wav') ,
  nine : require('./Component/Sound/nine.wav') ,
  ten : require('./Component/Sound/ten.wav') ,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  play = async number => {
    const sound = new Audio.Sound();
    try{
      await sound.loadAsync(listSound[number]);
      await sound
      .playAsync()
      .then( async playbackStatus => {
        setTimeout(() => {
          sound.unloadAsync();
        }, playbackStatus.durationMillis+100);
      })
      .catch(error => {
        console.log(error)
      });
    }
    catch (error){
      console.log(error)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.grid}>
          <Image
            source = {require('./Component/logo.png')}
            style={styles.logo}
          />
          <View style={styles.row}>
            <TouchableOpacity
             style={[{backgroundColor: listBack[1]},styles.item]}
             onPress = {() => {this.play("one")}}
            >
              <Text style={styles.itemtext}>One</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={[{backgroundColor: listBack[2]},styles.item]}
             onPress = {() => {this.play("two")}}
            >
              <Text style={styles.itemtext}>Two</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
             style={[{backgroundColor: listBack[3]},styles.item]}
             onPress = {() => {this.play("three")}}
            >
              <Text style={styles.itemtext}>Three</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={[{backgroundColor: listBack[4]},styles.item]}
             onPress = {() => {this.play("four")}}
            >
              <Text style={styles.itemtext}>Four</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
             style={[{backgroundColor: listBack[5]},styles.item]}
             onPress = {() => {this.play("five")}}
            >
              <Text style={styles.itemtext}>Five</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={[{backgroundColor: listBack[6]},styles.item]}
             onPress = {() => {this.play("six")}}
            >
              <Text style={styles.itemtext}>Six</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
             style={[{backgroundColor: listBack[7]},styles.item]}
             onPress = {() => {this.play("seven")}}
            >
              <Text style={styles.itemtext}>Seven</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={[{backgroundColor: listBack[8]},styles.item]}
             onPress = {() => {this.play("eight")}}
            >
              <Text style={styles.itemtext}>Eight</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <TouchableOpacity
             style={[{backgroundColor: listBack[9]},styles.item]}
             onPress = {() => {this.play("nine")}}
            >
              <Text style={styles.itemtext}>Nine</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
             style={[{backgroundColor: listBack[10]},styles.item]}
             onPress = {() => {this.play("ten")}}
            >
              <Text style={styles.itemtext}>Ten</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#000',
  },
  grid : {
    flex: 1,
    margin : 20,
  },
  logo : {
    alignSelf: 'center',
    marginTop: 15,
  },
  row : {
    flexDirection: 'row',
    borderRadius: 10,
    overflow: 'hidden',
  },
  item : {
    flex: 1,
    height : 110,
    alignItems: 'center',
    justifyContent: 'center',
    margin : 2,
    
  },
  itemtext : {
      color : "#fff",
      fontSize: 20,
      fontWeight : 'bold',
  },
});