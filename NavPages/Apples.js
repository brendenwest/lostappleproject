import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from '../shared/Header';
import firestore from '@react-native-firebase/firestore';

function About() {
  const appleCollection = firestore().collection('apples');
  function onResult(QuerySnapshot) {
    console.log('Got Apple collection result.');
  }

  function onError(error) {
    console.error(error);
  }

  appleCollection.onSnapshot(onResult, onError);

  /* firestore().collection('apples').get()
  .then(querySnapshot => {
    console.log('Total apples: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapShot => {
      console.log('apple: ', documentSnapshot.id, documentSnapshot.data());
    });
  }); */

  return (
    <ScrollView>
      <Header />
      <Text>Apples Page!</Text>

    </ScrollView>
  );
}

export default About;
