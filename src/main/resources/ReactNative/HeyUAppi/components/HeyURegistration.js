import React from 'react';
import {View, Text,  StyleSheet, TextInput, Button} from 'react-native';
import { connect } from 'react-redux'

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            heyUserAuthentication:{
                heyUserName: 'bob',
                heyUserPassword: 'bob',
                heyUserConfirmPassword: 'bob',
            },
            heyUserIsConnected: false,
            messageSent:"Veuillez saisir les informations",
         
        }
    }



    updateAuthentication = () => {
        const action = { type: "UPDATE_AUTH", value: this.state.heyUserAuthentication }
        this.props.dispatch(action)
    }

    updateConnected = () => {
        const action = { type: "UPDATE_CONNECT", value: this.state.heyUserIsConnected}
        this.props.dispatch(action)
    }




    register(){
    console.log("fetch de registering")
        fetch('http://192.168.1.62:8080/registering', {
            method: 'POST',
            headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                heyUserAuthentication:{
                heyUserName: this.state.heyUserName,
                heyUserPassword: this.state.heyUserPassword,
                heyUserConfirmPassword: this.state.heyUserConfirmPassword
                }
            }),
             }).then((response) => response.json())
            .then((responseJson) => {
                this.setState({heyUserIsConnected: responseJson.connected});
                this.setState({messageSent: responseJson.messageSent});

                return responseJson.heyUserIsConnected;
            })
            .catch((error) => {
                console.error(error);
            });


            this.updateAuthentication();
            this.updateConnected();

    }



  render() {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="UserName"
          onChangeText={(text) => this.setState({heyUserName:text})}
          value={this.state.text}
        />

        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(text) => this.setState({heyUserPassword:text})}
          value={this.state.text}
        />


        <TextInput
          style={{height: 40}}
          placeholder="Verify Password"
          onChangeText={(text) => this.setState({heyUserConfirmPassword:text})}
          value={this.state.text}
        />
        <Button title="registering" onPress={() =>this.register() }/>

        <Text>{this.state.messageSent}</Text>


      </View>
    );
  }





}







const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
  }
  
  export default connect(mapDispatchToProps)(Registration)