import React from 'react';
//import react in our code. 
import {Button, View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
//import all the components we are going to use.

import 'react-native-gesture-handler'
import { connect } from 'react-redux'


class LoggingScreen extends React.Component{

    static navigationOptions = {
          title: 'Logging'
      };
     
      componentDidMount = () => { console.log(this.props);}

    render(){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logging Screen</Text>
         <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />

        <Text>Longitude = {this.props.heyuserLocation.heyUserLongitude}</Text>
        <Text>Latitude = {this.props.heyuserLocation.heyUserLatitude}</Text>

      </View>


      );
    }
}


const mapStateToProps = (state) => {
  console.log("mapstatetoprops: "+state.heyuserLocation.heyUserLongitude)
  // return state
  return {
    heyuserLocation: state.heyuserLocation


  }
}

export default connect(mapStateToProps)(LoggingScreen)