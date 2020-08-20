import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

import {Container,Form,Item,Label,Button,Input} from 'native-base'

export default class Home extends React.Component {

    state = {
        name : ""
    }

    render() {
        return (
           <Container style={styles.container}>
               <Form>
                   <Item floatingLabel>
                       <Label>UserName</Label>
                       <Input
                        autoCapitalize ="none"
                        autoCorrect = {false}
                        onChangeText = {name => this.setState({name})}
                   />
                   </Item>
                   
               </Form>
               <Button
                style={{marginTop : 20}}
                full
                rounded
                success
                onPress = {() => {
                    this.props.navigation.navigate("Chat",{
                        name : this.state.name
                    })}}>
                   <Text>
                        Start Chat   
                   </Text>
                </Button>
           </Container>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex :1,
        backgroundColor : '#fff',
        justifyContent : "center",
        padding : 10
    }
})