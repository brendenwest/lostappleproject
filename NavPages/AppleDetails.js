import React from 'react';
import {Text, View} from 'react-native';
import appleList from './Apples';

const AppleDetails = ({navigation, route}) => {
  apDeets = route.params.id;
  //console.log('Params: ' + JSON.stringify(apDeets));

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{apDeets.name}</Text>
      <Text>Found: {apDeets.found ? apDeets.found : '???'}</Text>
      <Text>{apDeets.location}</Text>

      {/* ADD FUTURE APPLE IMAGE, APPLE DESC, POSSIBLE EMBEDDED MAP FOR LOCATION?  */}
    </View>
  );
}

export default AppleDetails;
