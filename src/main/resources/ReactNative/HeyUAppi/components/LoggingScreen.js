import React from 'react';
import {Button, View, Text, TextInput,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
import { connect } from 'react-redux'


class LoggingScreen extends React.Component{

  static navigationOptions = {
    title: 'Logging'
  };





  componentDidUpdate = () =>{console.log("logging s'update")}



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

        <View>
            <Text>Login</Text>
            <TextInput  name='heyUserName' onChange={()=>{}}></TextInput>
            <TextInput  name='heyUserPassword' onChange={()=>{}}></TextInput>
            <Button title='Submit' onPress={()=>{}}></Button>
        </View>

      </View>


      );
  }
}


const mapStateToProps = (state) => {
  console.log("mapstatetoprops: "+state.heyUserLocation.heyUserLongitude)

  return {
    heyUserLocation: state.heyUserLocation


  }
}

export default connect(mapStateToProps)(LoggingScreen)