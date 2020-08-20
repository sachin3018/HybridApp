import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

import * as firebase from 'firebase'

export default class LoadingScreen extends Component {


    static navigationOptions = {
            title : "Loading",
            header : null
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged( (user) => {
            if(user){
                this.props.navigation.replace("Home")
            }else{
                this.props.navigation.replace("Login")
            }
        })
    }


    render() {
        return (
            <View style={{flex : 1, justifyContent : "center", alignItems: "center"}}>
                <ActivityIndicator size="large" coloe = "#192A56"/>
            </View>
        )
    }
}
