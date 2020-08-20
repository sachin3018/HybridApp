import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      followRequest : ["sachin","singh","shesha","sister"],
      following : ["sp singh","seema kumari","radhey shyam tiwari"]
    };
  }

  followup = index => {
    const { followRequest, following }  = this.state;
    let followed = followRequest.splice(index,1) 
    following.push(followed)

    this.setState({
      followRequest,
      following
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are following {this.state.following.length} on this media</Text>
        <Button 
          title ="List to Follow"
          onPress = {() => {
            this.props.navigation.navigate("Follow",{
              followRequest : this.state.followRequest,
              following: this.state.following,
              followup : this.followup,
            })
          }}
        />
        <Button 
          title ="Count of follower"
          style={{marginTop: 10,}}
          onPress = {() => {
            this.props.navigation.navigate("ShowLikes",{
              followerCount : this.state.following.length,
            })
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
  }
});