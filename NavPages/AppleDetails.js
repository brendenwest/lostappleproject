import React from 'react';
import {Text, View} from 'react-native';
import Apples from './Apples';

const AppleDetails = ({navigation, route}) => {
  const {getApple} = Apples();
  const appleItem = getApple(route.params.id);
  console.log(appleItem);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Apple Details Page!</Text>
      <Text>{appleItem.name}</Text>
    </View>
  );
}

export default AppleDetails;
