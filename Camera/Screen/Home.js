import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, Alert} from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOption =  {
        title : "photo clicker"
  }

  render() {
     //photo = "empty"
    const {picture}  = this.props.route.params
    return (
      <View style={styles.container}>
        <Image
            resizeMode = "center"
            style={[styles.imageHolder]}
            source = {
                picture.uri
            }
        />
        <Text>{JSON.stringify(picture)}</Text>
        <Button
            title="Take Photu"
            style={styles.button}
            onPress = {() => {
                this.props.navigation.navigate("Camera")
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    imageHolder : {
        alignSelf: 'center',
        
    },
    button : {
        margin: 20,
    },
});