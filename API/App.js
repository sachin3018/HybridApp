import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, FlatList, Image } from 'react-native'
import { Card, CardItem } from 'native-base'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoading : true,
      dataSource : []
    };
  }

  getUserFromApi = () => {
    return(
      fetch("https://randomuser.me/api/?results=50")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading : false,
          dataSource : this.state.dataSource.concat(responseJson.results)
        })
      })
      .catch(error => console.log(error))
    )

  }

  _keyextractor = (datasource , index ) =>  {datasource.email}

  componentDidMount(){
    this.getUserFromApi();
  }

  render() {
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator color = "#2323a" size = "large" />
        </View>
      )
    }


    return (
      <View>
        <FlatList
          data = {this.state.dataSource}
          keyExtractor = {this._keyextractor}
          renderItem = {({item}) => (
            <Card>
              <CardItem>
                <View style={styles.container}>
                  <Image style={styles.profilePicture} source = {{ uri : item.picture.medium}}/>
                </View>
                <View style={styles.userInfo}>
                  <Text>
                    Name : {item.name.title} {item.name.first} {item.name.last}
                  </Text>
                  <Text>
                    Email : {item.email}
                  </Text>
                  <Text>
                    Phone : {item.phone}
                  </Text>
                  <Text>
                    City  : {item.location.city}
                  </Text>
                </View>
              </CardItem>
            </Card>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : "center",
    alignItems : "center",
    marginTop : 15,
    marginHorizontal : 10
  },
  profilePicture : {
    flex : 2,
    width : 100,
    height : 100,
    marginEnd : 15
  },
  userInfo : {
    flex : 5,
    flexDirection : "column",
    marginLeft : 15
  }
})
