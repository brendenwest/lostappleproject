import React from 'react';
import {Text, View} from 'react-native';
import firestore from '@react-native-firebase/firestore';

function About() {
  firestore().collection('apples').get()
  .then(querySnapshot => {
    console.log('Total apples: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapShot => {
      console.log('apple: ', documentSnapshot.id, documentSnapshot.data());
    });
  });
  
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Apples Page!</Text>
    </View>
  );
}

export default About;
