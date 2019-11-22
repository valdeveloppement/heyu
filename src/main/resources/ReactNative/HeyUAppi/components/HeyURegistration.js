import React from 'react';
import {View, Text,  StyleSheet, TextInput, Button} from 'react-native';

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <View>
                <Text>Registration</Text>
                <TextInput autoCorrect='false' name='heyUserName' onChange={()=>{}}></TextInput>
                <TextInput autoCorrect='false' name='heyUserPassword' onChange={()=>{}}></TextInput>
                <TextInput autoCorrect='false' name='heyUserPasswordConfirm' onChange={()=>{}}></TextInput>
                <Button title='Submit' onPress={()=>{}}></Button>
            </View>
        )
    }
}

export default Registration;