import React from 'react';
import {Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Header from '../shared/Header';
import styles from '../StyleSheet/SummaryStyle';

function Home() {
  return (
    <ScrollView>
      <Header />
      <Text style={styles.summaryText}>
        The Whitman County Historical Society Lost Apple Project seeks to
        identify and preserve heritage apple trees and orchards in the Inland
        Empire.{' '}
      </Text>
      <Text style={styles.homeText}>View our Gallery</Text>
      <Image style={styles.homeImg} source={require('../Images/image1.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image2.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image3.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image4.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image5.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image6.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image7.jpg')} />
      <Image style={styles.homeImg} source={require('../Images/image8.jpg')} />
    </ScrollView>
  );
}
export default Home;
