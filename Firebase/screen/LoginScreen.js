import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity, Keyboard, Image, KeyboardAvoidingView ,Platform,ScrollView, Alert} from 'react-native'

import { Form, Item, Label, Input, Button } from 'native-base'

import * as firebase from 'firebase'

export default class LoginScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : "",
            password : "",
            buttonDisable : false
        }
    }

    static navigationOptions = {
        title : "LoginIn",
        header : null,
    }
    
    signInToAccount = (email,password) => {
        this.setState({
            buttonDisable : true
        })
        firebase.auth()
                .signInWithEmailAndPassword(email,password)
                .then( () => {
                    this.props.navigation.replace("Home")
                })
                .catch(error => {
                    Alert.alert(error.message)
                    this.setState({
                        buttonDisable : false
                    })
                })
    }


    render() {
        return (
            <ScrollView  style = {styles.container}>
            <KeyboardAvoidingView
             style={styles.container}
             behavior="position"
             enabled
            > 
                    <View style = {styles.logoContainer}>
                    <Image
                        source = {require("../assets/logo.png")}
                    ></Image>
                    <Text>Welcome</Text>
                    </View>
               <Form style={styles.form}>
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
                            this.signInToAccount(
                                this.state.email,
                                this.state.password
                            )
                        }}>
                    <Text style={styles.buttonText}>Log In</Text>
               </Button>
               </Form>
               <View style={styles.footer}>
               <Text>OR</Text>
                   <TouchableOpacity
                   disabled ={this.state.buttonDisable}
                    onPress = {() => {this.props.navigation.navigate("Signup")}}>
                      <View style={{padding : 15, backgroundColor : '#74B9FF', borderRadius : 30, marginTop :10}}>
                        <Text >Create a new Account ?</Text>
                     </View>
                   </TouchableOpacity>
               </View>
           
            </KeyboardAvoidingView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    form: {
      padding: 20,
      width: "100%",
      marginBottom: 30
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
  