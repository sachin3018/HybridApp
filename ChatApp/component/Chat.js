import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { GiftedChat } from 'react-native-gifted-chat'

import Firebase from '../Firebase'

export default class Chat extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        title: "LCO Chat Room",
        headerStyle: {
          backgroundColor: "#fd0759"
        },
        headerTintColor: "#FFF"
      });

    state = {
        messages : []
    }


    get user() {
        return {
         name : this.props.route.params === "" ? this.props.route.params :"sachin",
          _id: Firebase.shared.uid
        };
      }

    UNSAFE_componentWillMount() {
        Firebase.shared.on(message => 
            this.setState(previousstate => ({
                messages : GiftedChat.append(previousstate.messages,message)
            }))
            )

    }

    render() {
      
        return (
           
                <GiftedChat
                 messages={this.state.messages}
                user={this.user}
                onSend={Firebase.shared.send}
                />
           
        )
    }
}
