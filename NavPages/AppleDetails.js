import React from 'react';
import {Text, View} from 'react-native';
import appleList from './Apples';

const AppleDetails = ({navigation, route}) => {
  console.log('Params: ' + JSON.stringify(route.params));
  //console.log(appleList);
  //const appleItem = getApple(route.params.key);
  //console.log(appleItem);
  //console.log(JSON.stringify({item}));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Apple Details Page!</Text>
      <Text></Text>
    </View>
  );
}

export default AppleDetails;
