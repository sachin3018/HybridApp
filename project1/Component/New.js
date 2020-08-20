import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Text style={styles.text}>{this.props.name}</Text>
    );
  }
}

const styles = StyleSheet.create({
    text : {
      fontSize : 20,
      fontStyle : 'normal',
      backgroundColor : '#45CE30',
      marginTop : 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius : 10,
    },
  });
