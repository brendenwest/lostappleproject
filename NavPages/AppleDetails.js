import React from 'react';
import {Text, View, Image} from 'react-native';
import appleList from './Apples';
import Header from '../shared/Header';
import styles from '../StyleSheet/AppleDetailsStyle';

const AppleDetails = ({navigation, route}) => {
  apDeets = route.params.id;
  //console.log('Params: ' + JSON.stringify(apDeets));

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Header />
      <View style={styles.title} >
        <Text style={styles.titleText}>{apDeets.name}</Text>
      </View>
      <Image
          style={styles.applePlaceholder}
          source={require('../Images/apple-3155.png')}
        />
      <Text style={styles.locText}>Found: {apDeets.found ? apDeets.found : '???'}</Text>
      <Text style={styles.locText}>{apDeets.location}</Text>
      <Text style={styles.descText}>Description of the apple</Text>

      {/* ADD FUTURE APPLE IMAGE, APPLE DESC, POSSIBLE EMBEDDED MAP FOR LOCATION?  */}
    </View>
  );
}

export default AppleDetails;
