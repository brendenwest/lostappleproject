import React, { useState, useEffect } from 'react';
import {View, StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import firestore from '@react-native-firebase/firestore';

function Map() {
  const [appleList, setApples] = useState([]); // Initial empty array of apples

  useEffect(() => {
    const appleCollection = firestore()
    .collection('apples')
    .onSnapshot(querySnapshot => {
      const appleList = [];

      querySnapshot.forEach(documentSnapshot => {
        appleList.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });

      setApples(appleList);
    });
    //console.log(appleList);
    // Unsubscribe from events when no longer in use
    return () => appleCollection();
  }, []);
  return (
    <View>
      <MapView
        style={styles.map}
        loadingEnabled //to show loading while map loading
        initialRegion={{
          latitude: 46.7304268,
          longitude: -117.173895,
          //How much space it should show on the screen
          latitudeDelta: 0.4,
          longitudeDelta: 0.025,
        }}>

        {appleList.map(item => (
          // console.log(item.name + ' ' + item.coordinate.latitude),
          <Marker
            key={item.id}
            coordinate={item.coordinate}
            pinColor={'green'}
            // coordinate={{latitude: item.coordinate._latitude, longitude: item.coordinate._longitude}}
            title={item.location}
            description={item.name}  
          />
        )
        )}
        
        {/* <Marker
          coordinate={{latitude: 46.8171611, longitude: -116.693441}}
          pinColor={'green'}
          title={'Latah County, ID'}
          description={'Butter Sweet of Pennsylvania'}
        />
        <Marker
          coordinate={{latitude: 46.323559, longitude: -117.9725379}}
          pinColor={'blue'}
          title={'Dayton, WA'}
          description={'Surprise #1'}
        />
        <Marker
          coordinate={{latitude: 43.6166163, longitude: -116.200886}}
          pinColor={'yellow'}
          title={'Boise, ID'}
          description={'Fink'}
        />
        <Marker
          coordinate={{latitude: 45.8995143, longitude: -117.3104085}}
          title={'Flora, OR'}
          description={'Kay - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 47.6571934, longitude: -117.4235106}}
          pinColor={'tomato'}
          title={'Spokane, WA'}
          description={'Shackleford - Found in 2017'}
        />
        <Marker
          coordinate={{latitude: 46.8171611, longitude: -116.693441}}
          pinColor={'wheat'}
          title={'Latah County, ID'}
          description={'Colman'}
        />
        <Marker
          coordinate={{latitude: 47.6038321, longitude: -122.3300624}}
          pinColor={'tan'}
          title={'near Seattle, WA'}
          description={'Nelson Sweet'}
        />
        <Marker
          coordinate={{latitude: 47.8111504, longitude: -116.896931}}
          pinColor={'aqua'}
          title={'Rathdrum, ID'}
          description={'Ewalt - Found in 2017'}
        />
        <Marker
          coordinate={{latitude: 46.9428831, longitude: -117.5286172}}
          pinColor={'violet'}
          title={'Whitman County, WA'}
          description={'Dickinson - Found in 2016'}
        />
        <Marker
          coordinate={{latitude: 46.7304268, longitude: -117.173895}}
          pinColor={'yellow'}
          title={'Pullman, WA'}
          description={'Almota - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 46.9428831, longitude: -117.5286172}}
          pinColor={'blue'}
          title={'Whitman County, WA'}
          description={'McAfee - Found in 2017'}
        />
        <Marker
          coordinate={{latitude: 46.2704176, longitude: -118.1532861}}
          pinColor={'tan'}
          title={'Waitsburg, WA'}
          description={'Streaked Pippin - Found in 2020'}
        />
        <Marker
          coordinate={{latitude: 43.6166163, longitude: -116.200886}}
          pinColor={'indigo'}
          title={'Boise, ID'}
          description={'Kittageskee - Found in 2017'}
        />
        <Marker
          coordinate={{latitude: 46.7304268, longitude: -117.173895}}
          title={'Pullman, WA'}
          description={'Ivanhoe - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 46.2704176, longitude: -118.1532861}}
          pinColor={'tomato'}
          title={'Waitsburg, WA'}
          description={'Jackson Winter Sweet - Found in 2018'}
        />
        <Marker
          coordinate={{latitude: 46.7368046, longitude: -116.7693401}}
          pinColor={'indigo'}
          title={'Troy, ID'}
          description={'Regmalard - Found in 2018'}
        />
        <Marker
          coordinate={{latitude: 46.8801655, longitude: -117.3643495}}
          pinColor={'violet'}
          title={'Colfax, WA'}
          description={'Eper - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 46.9428831, longitude: -117.5286172}}
          pinColor={'yellow'}
          title={'Whitman County, WA'}
          description={'Nero - Found in 2014'}
        />
        <Marker
          coordinate={{latitude: 47.8111504, longitude: -116.896931}}
          pinColor={'gold'}
          title={'Rathdrum, ID'}
          description={'Flushing Spitzenburg - Found in 2017'}
        />
        <Marker
          coordinate={{latitude: 44.9391565, longitude: -123.033121}}
          title={'Salem, OR'}
          description={'Carlough - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 46.9428831, longitude: -117.5286172}}
          pinColor={'linen'}
          title={'Whitman County, WA'}
          description={'Arkansas Beauty - Found in 2016'}
        />
        <Marker
          coordinate={{latitude: 46.8171611, longitude: -116.693441}}
          pinColor={'green'}
          title={'Latah County, ID'}
          description={'Claribel'}
        />
        <Marker
          coordinate={{latitude: 46.9970635, longitude: -120.5451223}}
          pinColor={'indigo'}
          title={'Ellensburg, WA'}
          description={'Saxon Priest - Found in 2017'}
        />
        <Marker
          coordinate={{latitude: 46.7323875, longitude: -117.0001651}}
          pinColor={'blue'}
          title={'Moscow, ID'}
          description={'Excelsior - Found in 2018'}
        />
        <Marker
          coordinate={{latitude: 46.7304268, longitude: -117.173895}}
          pinColor={'wheat'}
          title={'Pullman, WA'}
          description={'Milalfyi'}
        />
        <Marker
          coordinate={{latitude: 46.7323875, longitude: -117.0001651}}
          title={'Moscow, ID'}
          description={'Iowa Flat - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 46.8171611, longitude: -116.693441}}
          pinColor={'tomato'}
          title={'Latah County, ID'}
          description={'Sary Sinap - Found in 2020'}
        />
        <Marker
          coordinate={{latitude: 46.2704176, longitude: -118.1532861}}
          pinColor={'green'}
          title={'Waitsburg, WA'}
          description={'Steptoe - Found in 2021'}
        />
        <Marker
          coordinate={{latitude: 46.4748738, longitude: -117.6026896}}
          pinColor={'orange'}
          title={'Pomeroy, WA'}
          description={'Gold Ridge - Found in 2021'}
        /> */}
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
