import React, { Component } from 'react'
import { Text, View, ScrollView, TouchableOpacity, Linking, Platform, Alert, AsyncStorage, StyleSheet } from 'react-native'
import { Card, CardItem }  from 'native-base'
import { Entypo } from '@expo/vector-icons'

export default class ViewContactScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            fname : "Dummy Text",
            lname : "Dummy Text",
            email : "Dummy Text",
            phone : "Dummy Text",
            address : "Dummy Text",
            key : "Dummy Text"
        }
    }

    static navigationOptions = {
        title : "View Contact"
    }

    componentDidMount() {
        const { navigation } = this.props;
        navigation.addListener("focus", () => {
            const { keys : key } = this.props.route.params
            this.getAllContact(key)
        })
    }

    getAllContact = async( key ) => {
        await AsyncStorage.getItem(key)
                          .then(contactJsonString => {
                              var contact = JSON.parse(contactJsonString)
                              contact["key"] = key
                              this.setState(contact)
                          })
                          .catch(erroe => {
                              console.log(error)
                          })
    }

    callAction = phone => {
        let phoneNumber = phone
        if(Platform.OS != 'android'){
            phoneNumber = `telpromt:${phoneNumber}`
        }else {
            phoneNumber = `tel:${phoneNumber}`
        }

        Linking.canOpenURL(phoneNumber)
               .then(supported => {
                   if(!supported){
                       Alert.alert("phone number is not supported")
                   }else {
                       return Linking.openURL(phoneNumber)
                   }
               })
               .catch(error => {
                   console.log(error)
               })
    }

    smsAction = phone => {
        let phoneNumber = phone;
        phoneNumber = `sms:${phoneNumber}`

        Linking.canOpenURL(phoneNumber)
               .then(supported => {
                   if(!supported){
                       Alert.alert('phone number is not valid')
                   }else{
                       return Linking.openURL(phoneNumber)
                   }
               })
               .catch(error => {
                   console.log(error)
               })
    }

    editContact = key => {
        this.props.navigation.navigate("EditContact",{ keys : key})
    }

    deleteContact = key => {
        Alert.alert(
            "Are You Sure to Delete ?",
            `${this.state.fname} ${this.state.lname}`,
            [
                {
                    text : "cancel",
                    onPress : () => { console.log("cancelled")}
                },
                {
                    text : "Delete",
                    onPress : async() => {
                        await AsyncStorage.removeItem(key)
                        .then(() => {
                            this.props.navigation.goBack();
                        })
                        .catch(error => {
                            console.log(error)
                        })
                    }
                }
            ]
        )
    }
    render() {
       
        return (
            <ScrollView style={styles.container}>
                <View style={styles.contactIconContainer}>
                    <Text style={styles.contactIcon}>
                        {this.state.fname[0].toUpperCase()}
                    </Text>
                    <View style={styles.nameContainer}>
                    <Text style={styles.name}>
                        {this.state.fname} {this.state.lname}
                    </Text>
                </View>
                </View>
                <View style={styles.infoContainer}>
                    <Card>
                        <CardItem bordered>
                            <Text style={styles.infoText}>Phone Number</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.infoText}>{this.state.phone}</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Text style={styles.infoText}>E-mail</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.infoText}>{this.state.email}</Text>
                        </CardItem>
                    </Card>
                    <Card>
                        <CardItem bordered>
                            <Text style={styles.infoText}>Address</Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.infoText}>{this.state.address}</Text>
                        </CardItem>
                    </Card>
                </View>
            
                <Card style={styles.actionContainer} >
                    <CardItem style={styles.actionButton}>
                        <TouchableOpacity
                            onPress = {() => {
                                this.callAction(this.state.phone)
                            }}
                        >
                            <Entypo
                                name="phone"
                                size = {50}
                                color = "#B83227"
                            />
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem style={styles.actionButton}>
                        <TouchableOpacity
                            onPress = {() => {
                                this.smsAction(this.state.phone)
                            }}
                        >
                            <Entypo
                                name="message"
                                size = {50}
                                color = "#B83227"
                            />
                        </TouchableOpacity>
                    </CardItem>
                
                    <CardItem style={styles.actionButton}>
                        <TouchableOpacity
                            onPress = {() => {
                                this.editContact(this.state.key)
                            }}
                        >
                            <Entypo
                                name="edit"
                                size = {50}
                                color = "#B83227"
                            />
                        </TouchableOpacity>
                    </CardItem>
                    <CardItem style={styles.actionButton}>
                        <TouchableOpacity
                            onPress = {() => {
                                this.deleteContact(this.state.key)
                            }}
                        >
                            <Entypo
                                name="trash"
                                size = {50}
                                color = "#B83227"
                            />
                        </TouchableOpacity>
                    </CardItem>
                </Card>
            
                
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    contactIconContainer: {
      height: 200,
      backgroundColor: "#B83227",
      alignItems: "center",
      justifyContent: "center"
    },
    contactIcon: {
      fontSize: 100,
      fontWeight: "bold",
      color: "#fff"
    },
    nameContainer: {
      width: "100%",
      height: 70,
      padding: 10,
      backgroundColor: "rgba(255,255,255,0.5)",
      justifyContent: "center",
      position: "absolute",
      bottom: 0
    },
    name: {
      fontSize: 24,
      color: "#000",
      fontWeight: "900"
    },
    infoText: {
      fontSize: 18,
      fontWeight: "300"
    },
    actionContainer: {
      flexDirection: "row"
    },
    actionButton: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    actionText: {
      color: "#B83227",
      fontWeight: "900"
    },
    infoContainer: {
        flexDirection: "column"
      },
  });