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



    componentDidMount = () => { 
      setInterval(() => {console.log(this.props)
        
      }, 2000);
      }

   // componentDidUpdate = () =>{console.log("logging s'update")}

    render(){
      return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Logging Screen</Text>
         <Button
          title="Go to Search"
          onPress={() => this.props.navigation.navigate('Search')}
        />

        <Text>Longitude = {this.props.heyUserLocation.heyUserLongitude}</Text>
        <Text>Latitude = {this.props.heyUserLocation.heyUserLatitude}</Text>

      </View>


      );
    }
}


const mapStateToProps = (state) => {
  console.log("mapstatetoprops: "+state.heyUserLocation.heyUserLongitude)
 // return state
  return {
    heyUserLocation: state.heyUserLocation


  }
}

export default connect(mapStateToProps)(LoggingScreen)