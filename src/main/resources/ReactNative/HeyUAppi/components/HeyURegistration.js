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
                heyUserPasswordConfirm: 'bob',
            },
            heyUserIsConnected: false,
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

    componentDidMount= ()=>{
        updateAuthentication();
        updateConnected();
    }


    render() {
        return(
            <View>
                <Text>Registration</Text>
                <TextInput autoCorrect='false' name='heyUserName' value={this.state.heyUserName} onChange={()=>{ this.setState({heyUserName: value})}}></TextInput>
                <TextInput autoCorrect='false' name='heyUserPassword' value={this.state.heyUserPassword} onChange={()=>{}}></TextInput>
                <TextInput autoCorrect='false' name='heyUserPasswordConfirm' value={this.state.heyUserPasswordConfirm} onChange={()=>{}}></TextInput>
                <Button title='Submit' onPress={()=>{
                    let register = {
                        heyUserName: this.state.heyUserName,
                        heyUserPassword: this.state.heyUserPassword,
                        heyUserPasswordConfirm: this.state.heyUserPasswordConfirm,
                    }
                    fetch('http://192.168.8.105:8080/registering', { method: 'POST', body: JSON.stringify(register)}).then((response) => response.json())
        .then((responseJson) => {
            this.setState({heyUserIsConnected: responseJson.Connected})
        })
        .catch((error) => {
            console.error(error);
        });
                }}></Button>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch: (action) => { dispatch(action) }
    }
  }
  
  export default connect(mapDispatchToProps)(Registration)