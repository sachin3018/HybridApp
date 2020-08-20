import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, } from 'react-native';

export default class Follow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() 
  {
    const { following, followRequest, followup } = this.props.route.params
    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(following)}</Text>

        {
          followRequest.map((person,index) => (
            <Button
              title={person}
              key={index}
              onPress = {() => {
                    followup(index)
                    this.forceUpdate()
              }}
            />
          ))
        }

        <Button 
          title ="next"
          onPress = {() => {
            this.props.navigation.navigate("Home")
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