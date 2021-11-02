import React from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Header from '../shared/Header';
import MapView, {Marker} from 'react-native-maps';

function Map() {
  return (
    <View>
      <MapView
        style={styles.map}
        loadingEnabled //to show loading while map loading
        initialRegion={{
          latitude: 47.61692,
          longitude: -122.32132,
          //How much space it should show on the screen
          latitudeDelta: 0.09,
          longitudeDelta: 0.035,
        }}>
        <Marker
          coordinate={{latitude: 47.61692, longitude: -122.32132}}
          pinColor={'green'}
          title={'Seattle Central College'}
          description={'The location of Seattle Central College'}
        />
        <Marker
          coordinate={{latitude: 47.619747, longitude: -122.348869}}
          pinColor={'blue'}
          title={'Space Needle'}
          description={'The location of Space Needle'}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
  },
});

export default Map;
