import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { Card, Icon }  from 'native-base'

import { connect } from 'react-redux'

class Employee extends React.Component {
    render() {
        return (
            <View style={{flex : 1,marginTop:100}}>
                <FlatList 
             data = {Object.values(this.props.data)}
             renderItem = {({item}) => (
                <Card style={styles.container}> 
                    <View style={styles.idcontainer}>
                        <Text style={styles.idText}>
                            {item.empid}
                        </Text>
                    </View>
                    <View style={styles.nameAndSalaryContainer}>
                        <Text style={styles.nameText}>
                            {item.empname}
                        </Text>
                        <Text style={styles.salaryText}>
                            {item.salary.toFixed(2)}
                        </Text>
                    </View>
                    <View style={styles.performanceIconContainer}>
                        <TouchableOpacity
                         onPress = {() => this.props.decrement(item.empid)}
                        >
                            <Icon 
                             ios = "ios-thumbs-down"
                             android = "md-thumbs-down"
                             style={styles.badPerformance}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                         onPress = { () => this.props.increment(item.empid)}
                        >
                            <Icon 
                             ios = "ios-thumbs-up"
                             android = "md-thumbs-up"
                             style={styles.goodPerformance}
                            />
                        </TouchableOpacity>
                        
                    </View>
                </Card>
             )}
             keyExtractor = { item => item.empid.toString()}
            >

            </FlatList>
            </View>
        )
    }
}

function mapStateToProps(state){
    return{
        data : state
    }
}

function mapDispatchToProps(dispatch){
    return{
        increment : id => dispatch({
            type : 'GOOD_PERFORMANCE',
            id : id
        }),
        decrement : id => dispatch({
            type : 'BAD_PERFORMANCE',
            id : id
        })
    }
}

const styles = StyleSheet.create({
    //list card view container
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row"
    },
    // no. of employee container
    idContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 20
    },
    // no. of employee text
    idText: {
      fontSize: 18,
      color: "#000"
    },
    // name and salary text container
    nameAndSalaryContainer: {
      flex: 4,
      padding: 20
    },
    // employee name text
    nameText: {
      fontSize: 16,
      color: "#000"
    },
    // employee salary text
    salaryText: {
      fontSize: 16,
      color: "#000"
    },
    // like dislike icon container
    performanceIconContainer: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center"
    },
    //like icon
    goodPerformance: {
      color: "green"
    },
    // dislike icon
    badPerformance: {
      color: "red"
    }
  });
  
export default connect(mapStateToProps,mapDispatchToProps)(Employee)