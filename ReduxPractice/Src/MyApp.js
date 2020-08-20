import React, { Component } from 'react'
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class MyApp extends React.Component {
  render() {
    return (
      <View style={{flex : 1,justifyContent : "center",}}>
         
        <View style={{flexDirection : "row",justifyContent: "space-between", marginHorizontal :30 }}>
        <TouchableOpacity
                onPress = { () => this.props.increment()}
                style={{marginVertical:10}}
            >
                <Text>CLICK TO PLUS</Text>
            </TouchableOpacity>

            <Text style={{ fontSize : 25, color : '#c1c1c1'}}>
              {this.props.reduxCounter}
          </Text>

            <TouchableOpacity
                onPress = { () => this.props.decrement()}
                style={{marginVertical:10}}
            >
                <Text>CLICK TO MINUS</Text>
            </TouchableOpacity>

        </View>
      </View>
    )
  }
}

function mapStateToProps(state){
    return {
        reduxCounter :  state.reduxCounter
    };
}

function mapDispatchToProps(dispatch){
return{
        increment : () => dispatch({
            type : 'INC_COUNTER'
        }),
         decrement : () => dispatch({
            type : 'DEC_COUNTER'
        })
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MyApp)

const styles = StyleSheet.create({

})