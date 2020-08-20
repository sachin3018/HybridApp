import React, { Component } from 'react'
import { Text, View,TouchableOpacity,FlatList , AsyncStorage, StyleSheet, Alert} from 'react-native'
import { Card } from "native-base";
import { Entypo } from "@expo/vector-icons"
export default class HomeScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            data : [],
        }
    }
    
    static navigationOptions = {
        title : "Edit Contact"
    }


    UNSAFE_componentWillMount(){
        const { navigation } = this.props
        navigation.addListener("focus", () => {
            this.getAllContact()
            
        })
        
    }

    getAllContact = async() => {
        await AsyncStorage.getAllKeys()
              .then(keys => {
                  //console.log(keys)
                  return AsyncStorage.multiGet(keys)
                                     .then(results => {
                                         this.setState({
                                             data : results.sort(function(a,b){
                                                 if (JSON.parse(a[1]).fname < JSON.parse(b[1]).fname){ return -1 }
                                                 if (JSON.parse(a[1]).fname > JSON.parse(b[1]).fname){ return 1 }
                                                 return 0
                                             })
                                         })
                                     })
                                     .catch(error => {
                                         console.log(error.message)
                                     })
                
              })
              .catch(error  => {
                  console.log(error.message)
              })
           //   Alert.alert(JSON.stringify(this.state.data))
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data = {this.state.data}
                    renderItem={({ item }) => {
                        contact = JSON.parse(item[1]);
                        return(
                            <TouchableOpacity
                                onPress = {() => {
                                    this.props.navigation.navigate("ViewContact",{
                                        keys : item[0].toString()
                                    })
                                }}
                            >
                                <Card style={styles.listItem}>
                                <View style={styles.iconContainer}>
                                    <Text style={styles.contactIcon}>
                                        { contact.fname[0].toUpperCase() }
                                    </Text>
                                </View>
                                <View style={styles.infoContainer}>
                                    <Text style={styles.infoText}>
                                        {contact.fname} {contact.lname}
                                    </Text>
                                    <Text style={styles.infoText}>
                                        {contact.phone}
                                    </Text>
                                </View>
                            </Card>
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor = {(item,index) => item[0].toString()}

                />


                <TouchableOpacity
                    onPress = {() => {this.props.navigation.navigate("AddContact")}}
                    style = {styles.floatButton}
                >
                    <Entypo 
                     name="plus"
                     size = {30}
                     color="#fff"
                    />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff"
    },
    listItem: {
      flexDirection: "row",
      padding: 20
    },
    iconContainer: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#B83227",
      borderRadius: 100
    },
    contactIcon: {
      fontSize: 28,
      color: "#fff"
    },
    infoContainer: {
      flexDirection: "column"
    },
    infoText: {
      fontSize: 16,
      fontWeight: "400",
      paddingLeft: 10,
      paddingTop: 2
    },
    floatButton: {
      borderWidth: 1,
      borderColor: "rgba(0,0,0,0.2)",
      alignItems: "center",
      justifyContent: "center",
      width: 60,
      position: "absolute",
      bottom: 20,
      right: 15,
      height: 60,
      backgroundColor: "#B83227",
      borderRadius: 100
    }
  });
  