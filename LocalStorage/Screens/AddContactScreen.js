import React, { Component } from 'react'
import { 
Text, 
View,
Keyboard, 
Alert, 
TouchableWithoutFeedback,
ScrollView,
AsyncStorage,
StyleSheet,
} from 'react-native'

import { 
Form, 
Item, 
Input, 
Label, 
Button 
} from "native-base";

//import { AsyncStorage } from '@react-native-community/async-storage'
export default class AddContactScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname : "",
            lname : "",
            phone : "",
            email : "",
            address : ""
        }
    }

    static navigationOptions =  {
        title : "Contact App"
    }

    saveContact = async() => {
        if(
            this.state.fname != "" &&
            this.state.lname != "" &&
            this.state.phone != "" &&
            this.state.email != "" &&
            this.state.address != ""
        ){
            //create contact object
            var contact = {
                fname : this.state.fname,
                lname : this.state.lname,
                phone : this.state.phone,
                email : this.state.email,
                address : this.state.address
            }

           try{
            await AsyncStorage.setItem( Date.now().toString(),
            JSON.stringify(contact))
            .then(() => {
                this.props.navigation.goBack();
            })
            .catch(error => {
                console.log(error)
                //Alert.alert(error)
            })
           }
           catch(error){
            Alert.alert(error.message)
           }

        }else {
            Alert.alert("All entries are required")
        }
    }
    
    render() {
        return (
         
            <TouchableWithoutFeedback
            onPress = {() => {
                Keyboard.dismiss
            }}>
            <ScrollView style={styles.container}
             showsVerticalScrollIndicator = {false}
            >
                <Form>
                    <Item style={styles.inputItem}> 
                        <Label>First Name</Label>
                        <Input
                         autoCorrect = {false}
                         autoCapitalize = "none"
                         keyboardType = "default"
                         onChangeText = {fname =>  this.setState({ fname })}
                        />
                    </Item>
                    <Item style={styles.inputItem}> 
                        <Label>Last Name</Label>
                        <Input
                         autoCorrect = {false}
                         autoCapitalize = "none"
                         keyboardType = "default"
                         onChangeText = {lname =>  this.setState({ lname })}
                        />
                    </Item>
                    <Item style={styles.inputItem}> 
                        <Label>Phone Number</Label>
                        <Input
                         autoCorrect = {false}
                         autoCapitalize = "none"
                         keyboardType = "number-pad"
                         onChangeText = {phone =>  this.setState({ phone })}
                        />
                    </Item>
                    <Item style={styles.inputItem}> 
                        <Label>E-mail</Label>
                        <Input
                         autoCorrect = {false}
                         autoCapitalize = "none"
                         keyboardType = "email-address"
                         onChangeText = {email =>  this.setState({ email })}
                        />
                    </Item>
                    <Item style={styles.inputItem}> 
                        <Label>Address</Label>
                        <Input
                         autoCorrect = {false}
                         autoCapitalize = "none"
                         keyboardType = "default"
                         onChangeText = {address =>  this.setState({ address })}
                        />
                    </Item>
                </Form>
                <Button
                 full
                 style={styles.buttonText}
                 onPress = {() => {this.saveContact()}}>
                    <Text style={styles.buttonText}>Save</Text>
                </Button>
                <View style={styles.empty}></View>
            </ScrollView>
            </TouchableWithoutFeedback>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      margin: 10,
      height: 500
    },
    inputItem: {
      margin: 10
    },
    button: {
      backgroundColor: "#B83227",
      marginTop: 40
    },
    buttonText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize : 20
    },
    empty: {
      height: 500,
      backgroundColor: "#FFF"
    }
  });