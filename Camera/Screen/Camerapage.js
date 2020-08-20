import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity} from 'react-native';
import { Camera, Permissions } from "expo-camera"
import { FontAwesome } from "@expo/vector-icons"
export default class Camerapage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasPermission : null,
      type : Camera.Constants.Type.back,
      isFlash : Camera.Constants.FlashMode.off
    };
  }

  static navigationOption =  {
    title : "Camera"
}

   async componentDidMount() {
    const {status} = await Camera.requestPermissionsAsync();
    this.setState({hasPermission : status === "granted"})
  }

  //flip camera

  flipCamera = () => {
    this.setState({
      type : 
      this.state.type === Camera.Constants.Type.back
      ? Camera.Constants.Type.front
      : Camera.Constants.Type.back
    })
  }

  flashPress = () => {
    this.setState({
      isFlash : 
      this.state.isFlash === Camera.Constants.FlashMode.off
      ? Camera.Constants.FlashMode.on 
      : Camera.Constants.FlashMode.off
    })
  }


  takePicture = async () => {
    if(this.camera){
      const picture = await this.camera.takePictureAsync()
      this.props.navigation.navigate("Home",{ 
        picture
      })
    }
  }
  
  render() {
    const { hasPermission } = this.state

    if(hasPermission === null){
      return <View></View>
    }else if(hasPermission === false){
      return <View><Text>Permission Denied</Text></View>
    }else {
      return (
      <View style={styles.container}>
        <Camera
          style={styles.cameraView}
          type = {this.state.type}
          flashMode = {this.state.isFlash}
          ref = {ref => {
            this.camera = ref;
          }}
        >
          <View style={styles.iconcontainer}>
            <TouchableOpacity
            onPress={() => this.flipCamera()}
              style={styles.iconHolder}
            >
              <FontAwesome
                name="camera"
                size = {35}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
            onPress ={() => this.takePicture()}
            style={styles.iconHolder}
            >
              <FontAwesome
                name="circle"
                size = {35}
                style={styles.icon}
              />
            </TouchableOpacity>

            <TouchableOpacity
            onPress = {() => this.flashPress()}
            style={styles.iconHolder}>
              <FontAwesome
                name="flash"
                size = {35}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      </View>
    );
  }
}
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
    },
    cameraView : {
      flex: 1,
    },
    iconcontainer : {
      flexDirection: 'row',
      backgroundColor: "transparent",
    },
    iconHolder : {
      flex: 1,
      alignItems: "center",
      alignSelf: "flex-end"
    },
    icon : {
      marginBottom: 10,
    color: "#fff"
    },
});