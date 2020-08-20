import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, Alert, FlatList, KeyboardAvoidingView} from 'react-native'

import { Button,Card,Icon,Input } from 'native-base'

import * as firebase from 'firebase'
import { ScrollView } from 'react-native-gesture-handler'

export default class HomeScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            email : "",
            uid : "",
            message : "",
            messageList : [],
        }
    }

    sendMessage = message => {
        var messageListRef = firebase.database().ref("message_list")
        var postMessage = messageListRef.push()
        postMessage.set({
            text : message,
            time : Date.now()
        })

        this.setState({
            message : ""
        })
    }

    updateMessage = (messageList) => {
        this.setState({ 
            messageList
        })
    }


    componentDidMount(){

       
        firebase.auth()
                .onAuthStateChanged(authenticate => {
                    if(authenticate){
                        this.setState({
                            name : authenticate.displayName,
                            email : authenticate.email,
                            uid : authenticate.uid
                        })
                    }else{
                        this.props.navigation.replace("Login")
                    }
                })

       
    }


    UNSAFE_componentWillMount(){
        
        var self = this;

        var messageListRef = firebase.database().ref("message_list")
        messageListRef.on("value",datasnapshot => {
            if(datasnapshot.val()){
                let messageList = Object.values(datasnapshot.val())
                self.updateMessage(messageList.reverse())
            }
        })
    }

    logoutUser = () => {
        firebase.auth()
                .signOut()
                .then(() => {console.log("signout")})
                .catch(error => {
                    Alert.alert(error.message)
                })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} enabled behavior ="height">
                <View style={styles.header}>
                    <Image 
                        style={styles.imgae}
                        source = {require('../assets/logo.png')}
                    />
                    <Text style={styles.headerText}>{this.state.name}</Text>
                    <Icon  name = "camera" style ={{marginRight : 5,marginTop : 7}}/>
                </View>
                <View style={styles.listContainer}>
                <FlatList
                    data = {this.state.messageList}
                    renderItem = {({ item }) => (
                        <Card style={styles.listItem}>
                            <Text style={styles.messageText}>{item.text}</Text>
                            <Text style={styles.timeText}>{ new Date(item.time).toLocaleTimeString()}</Text>
                        </Card>
                    )}
                    inverted
                    keyExtractor = {(item,index) => { item.time.toString()}}
                />
                </View>
                <View style={styles.inputContainer}>
                    <Input
                        placeholder ="Enter Message"
                        onChangeText = {message => {this.setState({message})}}
                        value = {this.state.message}
                    />
                    <Button 
                        icon
                        rounded
                        danger
                        onPress = {() => {
                            this.sendMessage(this.state.message)}}>
                        <Icon name="paper-plane"/>
                    
                    </Button>
                </View>
               
            </KeyboardAvoidingView>
        )
    }
}const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        margin: 2,
        backgroundColor: "#fff"
      },
    logoContainer: {
      alignItems: "center",
      marginTop: 100,
      marginBottom: 100
    },
    userDetails: {},
  
    button: {
      marginTop: 20
    },
    buttonText: {
      color: "#fff"
    },
    header: {
    backgroundColor : "#DAE0E2",
    alignItems: "center",
    height: 40,
    justifyContent: "space-between",
    flexDirection : "row",
    marginHorizontal : 5,
  },
  headerText: {
    paddingHorizontal: 10,
    color: "#000",
    fontSize: 20,
    justifyContent : "center",
    alignSelf : "baseline",
    marginTop : 5,
    fontWeight : "900",
  },
  listContainer: {
    flex: 1,
    padding: 5
  },
  listItem: {
    padding: 10
  },
  messageText: {
    fontSize: 20
  },
  timeText: {
    fontSize: 10
  },
  inputContainer: {
    flexDirection: "row",
    padding: 5,
    borderWidth: 5,
    borderRadius: 15,
    borderColor: "#2B2B52",
    color: "#fff"
  },
  imgae : {
      height : 30,
      width : 30,
      borderRadius : 15,
      marginTop : 7
  }
  });