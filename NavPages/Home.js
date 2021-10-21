import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logocontainer}>
        <Image style={styles.logo} source={require('../Images/lapLogo.jpg')} />
      </View>

      <Text style={styles.text}>The Whitman County Historical Society Lost Apple Project seeks to identify and preserve heritage apple trees and orchards in the Inland Empire.</Text>

    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 5,
    padding: 10,
    margin: 10,
  },
  logoContainer: {
    flex: 0.3,
    backgroundColor: 'blue',
    borderWidth: 5,

  },
  logo: {
    borderWidth: 5,
    width: 345,
    height: 360,
  },
  text: {
    flex: 2,
    padding: 10,
    borderWidth: 5,
    backgroundColor: '#b22222',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',

  }
});

export default Home;
