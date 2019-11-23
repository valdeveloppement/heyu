import React from 'react';
//import react in our code. 
import {Button, View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
//import all the components we are going to use.

import 'react-native-gesture-handler'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

export default class LoggingScreen extends React.Component{

    static navigationOptions = {
          title: 'Logging'
      };
     
      componentDidMount = () => { console.log("test valentin");}

    render(){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logging Screen</Text>
         <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />
        <Text>Longitude:</Text>
        <Text>{this.props.navigation.getParam('heyUserLongitude', "ne marche pas")}</Text>

      </View>


      );
    }
}
