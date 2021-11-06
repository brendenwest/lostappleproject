
import React,  { useState, useEffect } from 'react';
import {Text, View, Image, ScrollView, ActivityIndicator, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Header from '../shared/Header';
import styles from '../StyleSheet/AppleList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
// import { navigation } from '@react-navigation/native';

const Item = ({ id, title, onPress }) => (
  //<View style={styles.item}>
    <TouchableOpacity
      style={styles.item}
      onPress={() => onPress(id)}
      >
      <Image
          style={styles.applePlaceholder}
          source={require('../Images/apple-3155.png')}
        />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  //</View>
);


/* const renderItem = ({ item }) => (
  <TouchableOpacity onPress={() => {
    navigation.navigate('AppleDetails', {data: item}
  )}}>
  <Item title={item.name} />
  </TouchableOpacity>
); */

const Apples = ({ navigation }) => {
  
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [appleList, setApples] = useState([]); // Initial empty array of apples

  //const navigation = useNavigation();
  const onPressItem = (key) => {
    navigation.navigate('AppleDetails', { key });
    console.log('onPressItem: ' + key);
}

  const renderItem = ({item}) => {
    console.log("render:" + JSON.stringify(item));
    return <Item onPress={onPressItem} title={item.name} />;
    
  };



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
      <FlatList
        data={appleList}
        renderItem={renderItem}
        key={item => item.id} /* keyExtractor={item => item.id}*/
      />
    </>
    

  );
}



export default Apples;
