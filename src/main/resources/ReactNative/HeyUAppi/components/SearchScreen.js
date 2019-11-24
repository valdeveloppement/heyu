import React from 'react';
import {Button, View, Text,  StyleSheet, Image , ScrollView , PermissionsAndroid,Platform} from 'react-native';


// import Slider from '@react-native-community/slider';
// import  MultiSlider from '@ptomasroos/react-native-multi-slider';
// import CustomSliderMarkerLeft from '@ptomasroos/react-native-multi-slider';
// import  CustomSliderMarkerRight  from '@ptomasroos/react-native-multi-slider';
// import Slider from '@react-native-community/slider';

// import Slider from '@react-native-slider';
//import all the components we are going to use.

 
export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // enableScroll = () => this.setState({ scrollEnabled: true });
  // disableScroll = () => this.setState({ scrollEnabled: false });

 render() {
    return (
       <View style = {styles.container}>

        <Text style={{justifyContent:'center',alignItems: 'center',marginTop:10}}>
            {/* Friends: {this.props.AppState.heyUserNearU.length} */}
            Search SearchScreen
          
        </Text>

        <Button
          title="Go to Logging"
          onPress={() => this.props.navigation.navigate('Logging')}
        />  
         <Text>{this.props.navigation.getParam('heyUserLongitude', "ne marche pas")}</Text>

{/*        
        <View>
            {this.props.AppState.heyUserNearU.map((heyUser, index) =>
            <View key={heyUser.heyUserName + index}>
                 <Image source={{uri:heyUser.heyUserPic }} style={{width: 60, height: 60}}/>
                <Text>{heyUser.heyUserName}</Text>
                <Text>{heyUser.heyUserMessage}</Text>
            </View>
            

            )}
        </View> */}

         {/* HOW TO USE  https://github.com/ptomasroos/react-native-multi-slider#installation
        <ScrollView scrollEnabled={this.state.scrollEnabled}>
           <MultiSlider
           onValuesChangeFinish={this.test()}
            // onValuesChangeStart={this.disableScroll}
            // onValuesChangeFinish={this.enableScroll}
          /> 

        </ScrollView> */}

{/* <Slider
    style={{width: 200, height: 40}}
    minimumValue={0}
    maximumValue={1}
    minimumTrackTintColor="#FFFFFF"
    maximumTrackTintColor="#000000"
  /> */}


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

