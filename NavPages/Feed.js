import React from 'react';
import { Text, View, ScrollView, Button, Linking, StyleSheet } from 'react-native';
import Header from '../shared/Header';

function Feed() {
  return (
    <>
      <View>
        <Header />
      </View>

      <ScrollView style={{ margin: 10 }}>
        <Button
          title="Open the Lost Apple Project Facebook page"
          color="#4267B2"
          onPress={() =>
            Linking.openURL('https://m.facebook.com/lostappleproject/?__tn__=%2Cg',)
          }
        />
      </ScrollView>
    </>
  );
}


export default Feed;
