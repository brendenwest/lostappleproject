import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './Header';

function Feed() {
  return (
    <ScrollView>
      <Header />
      <Text>Feed Page!</Text>
    </ScrollView>
  );
}

export default Feed;
