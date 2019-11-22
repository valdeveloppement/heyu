import React from 'react';
import {View, Text,  StyleSheet, Image , ScrollView , PermissionsAndroid,Platform} from 'react-native';

// import Slider from '@react-native-community/slider';
// import  MultiSlider from '@ptomasroos/react-native-multi-slider';
// import CustomSliderMarkerLeft from '@ptomasroos/react-native-multi-slider';
// import  CustomSliderMarkerRight  from '@ptomasroos/react-native-multi-slider';


//import all the components we are going to use.

 
export default class HeyUFriends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  enableScroll = () => this.setState({ scrollEnabled: true });
  disableScroll = () => this.setState({ scrollEnabled: false });
  test =(values)=> console.log(values);
 render() {
    return (
       <View style = {styles.container}>

        <Text style={{justifyContent:'center',alignItems: 'center',marginTop:10}}>
            Friends: {this.props.AppState.heyUserNearU.length}
        </Text>

       
        <View>
            {this.props.AppState.heyUserNearU.map((heyUser, index) =>
            <View key={heyUser.heyUserName + index}>
                 <Image source={{uri:heyUser.heyUserPic }} style={{width: 60, height: 60}}/>
                <Text>{heyUser.heyUserName}</Text>
                <Text>{heyUser.heyUserMessage}</Text>
            </View>
            

            )}
        </View>

         {/* HOW TO USE  https://github.com/ptomasroos/react-native-multi-slider#installation
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
           <MultiSlider
           onValuesChangeFinish={this.test()}
            // onValuesChangeStart={this.disableScroll}
            // onValuesChangeFinish={this.enableScroll}
          /> 

        </ScrollView> */}




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

