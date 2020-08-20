import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
class MyApp extends Component {
    render() {
        return (
            <View style={{flex : 1,justifyContent : "center", margin : 30}}>
                <View style={{flexDirection : "row", justifyContent : "space-between",}}>
                    <TouchableOpacity
                        onPress = { () => this.props.increment()}>
                        <Text>Increser</Text>
                    </TouchableOpacity>
                    <Text>{ this.props.myCount }</Text>
                    <TouchableOpacity
                        onPress = { () => this.props.decrement()}>
                        <Text>Decrease</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        myCount : state.myCount
    }
}

function mapDispatchToProps(dispatch){
    return{
        increment : () => dispatch({
            type : 'INC_COUNT'
        }),
        decrement : () => dispatch({
            type : 'DEC_COUNT'
        })
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(MyApp)


