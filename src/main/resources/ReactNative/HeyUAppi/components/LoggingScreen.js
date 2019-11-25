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
            <TextInput  name='heyUserName' value='' onChange={()=>{}}></TextInput>
            <TextInput  name='heyUserPassword' value='' onChange={()=>{}}></TextInput>
            <Button title='Submit' onPress={()=>{
              let register = {
                heyUserName: this.props.heyUserName,
                heyUserPassword: this.props.heyUserPassword,
                heyUserPasswordConfirm: this.props.heyUserPasswordConfirm,
              }
              fetch('/login', {method: 'POST', body: JSON.stringify(register)}).then((response) => response.json())
        .then((responseJson) => {
            this.setState({heyUserIsConnected: responseJson.Connected})
        })
        .catch((error) => {
            console.error(error);
        });
            }}></Button>
        </View>

      </View>


      );
  }
}


const mapStateToProps = (state) => {
  // console.log("mapstatetoprops: "+state.heyUserLocation.heyUserLongitude)
return state
  // return {
  //   heyUserLocation: state.heyUserLocation


  // }
}

export default connect(mapStateToProps)(LoggingScreen)