import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../shared/Header';
import styles from '../StyleSheet/SummaryStyle';


function Home() {
  return (
    <>
      <Header />
      <View>
        <Text style={styles.summaryText}>The Whitman County Historical Society Lost Apple Project seeks to identify and preserve heritage apple trees and orchards in the Inland Empire. </Text>
      </View>
    </>
  );
};
export default Home;
