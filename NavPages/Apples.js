import React,  { useState, useEffect } from 'react';
import {Text, View, Image, ScrollView, ActivityIndicator, FlatList, StatusBar} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Header from '../shared/Header';
import styles from '../StyleSheet/AppleList';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.name} />
);

function Apples() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [appleList, setApples] = useState([]); // Initial empty array of users

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
      setLoading(false);
    });

    // Unsubscribe from events when no longer in use
    return () => appleCollection();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  /* **************************************************** 
  function onResult(QuerySnapshot) {
    console.log('Got Apple collection result.');
  }
  
  function onError(error) {
    console.error(error);
  }
 
  appleCollection.onSnapshot(onResult, onError); 
  ******************************************************** */

  

  /* *****************************************************
  firestore().collection('apples').get()
  .then(querySnapshot => {
    console.log('Total apples: ', querySnapshot.size);
    querySnapshot.forEach(documentSnapshot => {
      console.log('apple: ', documentSnapshot.data().name);
    });
  });
  ******************************************************** */
  
  return (
    <>
      <Header />
      <Image
        style={styles.applePlaceholder}
        source={require('../Images/apple-3155.png')}
      />
      <FlatList
        data={appleList}
        renderItem={renderItem}
        key={item => item.id} /* keyExtractor={item => item.id}*/
      />
    </>
    
  );
}



export default Apples;
