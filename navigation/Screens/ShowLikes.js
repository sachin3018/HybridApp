import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';

export default class ShowLikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() 
  {
    const { followerCount} = this.props.route.params
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(followerCount)} following you</Text>
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