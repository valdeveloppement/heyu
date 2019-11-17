import React from 'react';
import {View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
//import all the components we are going to use.

 
 
export default class HeyUFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
}

 componentDidMount = () => {
    
  }





 

 
 render() {
    return (
       <View style = {styles.container}>

        <Text style={{justifyContent:'center',alignItems: 'center',marginTop:10}}>
            Friends: {this.props.AppState.heyUserNearU.length}
        </Text>

    
        {/* <ul>
          {this.props.AppState.heyUserNearU.map((friend, index) => {
            return <li key={index}>{friend.HeyUserName}</li>                     
          })}
        </ul> */}

       </View>
    )
 }
}



//Styles
const styles = StyleSheet.create ({
 container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
 },
 boldText: {
    fontSize: 20,
    color: 'red',
 }
})

