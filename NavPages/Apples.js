import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Header from '../shared/Header';
import styles from '../StyleSheet/AppleList';

function Apples() {
  const appleCollection = firestore().collection('apples');
  function onResult(QuerySnapshot) {
    console.log('Got Apple collection result.');
  }
  
  function onError(error) {
    console.error(error);
  }
 
  appleCollection.onSnapshot(onResult, onError);

  firestore().collection('apples').get()
  .then(querySnapshot => {
    console.log('Total apples: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapshot => {
      console.log('apple: ', documentSnapshot.data().name);
    });
  });
  
  return (
    <ScrollView /*style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}*/>
      <Header />
      <Text style={styles.centerText}>Apples Page!</Text>
      <Image
        style={styles.applePlaceholder}
        source={require('../Images/apple-3155.png')}
      />
    </ScrollView>
  );
}

export default Apples;
