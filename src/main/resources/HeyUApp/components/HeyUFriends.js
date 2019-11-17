import React from 'react';
import {View, Text,  StyleSheet, Image ,PermissionsAndroid,Platform} from 'react-native';
//import all the components we are going to use.

 
export default class HeyUFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
}


 
 render() {
    return (
       <View style = {styles.container}>

        <Text style={{justifyContent:'center',alignItems: 'center',marginTop:10}}>
            Friends: {this.props.AppState.heyUserNearU.length}
        </Text>


       
        <View>
            {this.props.AppState.heyUserNearU.map((heyUser, index) =>
            <View key={heyUser.heyUserName + index}>
                 <Image source={{uri:heyUser.heyUserPic }} style={{width: 100, height: 100}}/>
                <Text>{heyUser.heyUserName}</Text>
                <Text>{heyUser.heyUserMessage}</Text>
            </View>
                        <View key={heyUser.heyUserName + index}>
                        <Image source={{uri:heyUser.heyUserPic }} style={{width: 100, height: 100}}/>
                       <Text>{heyUser.heyUserName}</Text>
                       <Text>{heyUser.heyUserMessage}</Text>
                   </View>
            )}
        </View>

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

