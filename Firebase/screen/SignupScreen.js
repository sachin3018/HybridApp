import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView,TouchableOpacity,Image, StyleSheet, Alert } from 'react-native'
import { Form, Item, Label,Input, Button } from 'native-base'

import * as firebase from 'firebase'

export default class SignupScreen extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email : "",
            password  : "",
            name : ""
        }
    }

    signupuser = (email,password,name) =>{
            firebase
                .auth()
                .createUserWithEmailAndPassword(email,password)
                .then( authenticate => {
                    return authenticate.user
                           .updateProfile({
                               displayName : name
                           })
                           .then(() => {
                               this.props.navigation.replace("Home")
                           })
                           .catch(error => {
                               Alert.alert(error.message)
                           })
                })
                .catch(error => {
                    Alert.alert(error.message)
                })
    }

    render() {
        return (
            <KeyboardAvoidingView
            style={styles.container}
            behavior="position"
            enabled
           > 
                   <View style = {styles.logoContainer}>
                   <Image
                       source = {require("../assets/logo.png")}
                   ></Image>
                   <Text style={{marginTop : 10}} >Huuray! one step from joining our community</Text>
                   </View>
              <Form style={styles.form}>
              <Item floatingLabel>
                      <Label>Name</Label>
                       <Input
                        autoCapitalize ="none"
                        autoCorrect = {false}
                        keyboardType ="name-phone-pad"
                        onChangeText = { name => this.setState({name})}
                       ></Input>
                  </Item>
                  <Item floatingLabel>
                      <Label>Email</Label>
                       <Input
                        autoCapitalize ="none"
                        autoCorrect = {false}
                        keyboardType ="email-address"
                        onChangeText = { email => this.setState({email})}
                       ></Input>
                  </Item>
                  <Item floatingLabel >
                      <Label>Password</Label>
                      <Input 
                       secureTextEntry = {true}
                       autoCapitalize ="none"
                       autoCorrect = {false}
                       keyboardType ="default"
                       onChangeText = { password => this.setState({password})}
                      />
                  </Item>
                  <Button 
                       full
                       rounded
                       style = {styles.button}
                       onPress = {() => {
                        this.signupuser(
                            this.state.email,
                            this.state.password,
                            this.state.name
                        )
                    }}>
                   <Text style={styles.buttonText}>Ragister</Text>
              </Button>
              </Form>
              <View style={styles.footer}>
              <Text>OR</Text>
                  <TouchableOpacity
                   onPress = {() => {this.props.navigation.navigate("Login")}}>
                     <View style={{padding : 15, backgroundColor : '#74B9FF', borderRadius : 30,  marginTop :10}}>
                     <Text >Already Have an Account ?</Text>
                     </View>
                  </TouchableOpacity>
              </View>
           </KeyboardAvoidingView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 50
    },
    form: {
      padding: 20,
      width: "100%"
    },
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    footer: {
      alignItems: "center"
    }
  });