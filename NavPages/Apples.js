
import React,  { useState, useEffect } from 'react';
import {Text, View, Image, ScrollView, ActivityIndicator, FlatList, StatusBar, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Header from '../shared/Header';
import styles from '../StyleSheet/AppleList';
import useStore from '../shared/Firestore';

const Item = ({ id, title, onPress }) => (
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
);


const Apples = ({ navigation }) => {
  const store = useStore();
 /*
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [appleList, setApples] = useState([]); // Initial empty array of apples
*/

  const renderItem = ({item}) => {
    //console.log("render:" + JSON.stringify(item));
    return <Item onPress={() => navigation.navigate('AppleDetails', {id : item})} title={item.name} />;
    
  };



  /*useEffect(() => {
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
  }, []); */

  /*
  if (loading) {
    return <ActivityIndicator />;
  }
  */

  
  return (
    <>
      <Header />
      <FlatList
        data={store.appleList}
        /* data={appleList} */
        renderItem={renderItem}
        key={item => item.id} /* keyExtractor={item => item.id}*/
      />
    </>
    

  );
}



export default Apples;
