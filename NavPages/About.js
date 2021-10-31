import React from 'react';
import {Text, ScrollView, Image, Button, Linking, View} from 'react-native';
import Header from '../shared/Header';
import styles from '../StyleSheet/About';

function About() {
  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.aboutImg}
        source={require('../Images/david-denscoter.jpeg')}
      />
      <Text style={styles.centerText}>
        Lost Apple Project (LAP) is a nonprofit organization founded by David
        Benscoter, a retired FBI and IRS Criminal Division agent, who has ties
        to Pullman, having graduated from Pullman High and WSU. He became
        interested in apples after a Chattaroy, Washington, neighbor asked for
        help with the old trees on her property. Since then, David has been on
        the lookout for apple varieties that have become extinct. Lost Apple
        Project (LAP) has a mission to search abandoned farms and orchards to
        locate and preserve heritage apple trees and orchards planted before
        1920 in Pacific Northwest Washington State. In addition, LAP aims to
        search for a specific list of apple varieties that are now considered
        extinct or lost. When lost varieties are rediscovered, steps will be
        taken to propagate the trees and make them available again to the
        public. LAP partnered with Whitman County Historical Society (WCHS) to
        identify and preserve apple trees and orchards.
      </Text>
      <Image
        style={styles.aboutImg1}
        source={require('../Images/northwest.png')}
      />
      <Text style={styles.centerText}>
        To inspect trees, LAP depends on receiving information from people, old
        county fair records, newspaper clipping, etc. After finding the apple
        tree, LAP sends apples to an identification expert to determine if they
        are special. As of now, LAP has discovered 29 lost or nearly extinct
        apple varieties. Some were found in Washington, Oregon, and Idaho.
      </Text>
      <Image
        style={styles.aboutImg1}
        source={require('../Images/apple-note.jpeg')}
      />
      <Text style={styles.centerText}>
        In 2017 the LAP sold nearly 100 apple trees, including 80 once lost
        varieties, to the people of eastern Washington. This year there will be
        a limited number of once lost trees available for sale. If you would
        like to purchase a tree email Dave Benscoter. Also, if you purchased a
        tree in 2017 and it did not survive, please contact Dave and he will
        make sure you get a replacement tree. The cost is $25.00 to general
        public and $20 to WCHS members. These trees are on M111 rootstock which
        can grow to twenty feet. All proceeds help to fund further apple
        research and the WCHS.
      </Text>
      <Text style={styles.contact}>
        <Text style={styles.textHeading}> Contact Info{'\n'}</Text>
        <Text>PO Box 67 Colfax, WA 99111{'\n'}</Text>
        <View>
          <Button
            title="Email to David"
            onPress={() =>
              Linking.openURL(
                `mailto:dbens23@gmail.com?subject=Apple Project&body`,
              )
            }
            color="royalblue"
          />
          <Button
            title="Email to WCHS"
            onPress={() =>
              Linking.openURL(
                `mailto:wchsdirector1@gmail.com@gmail.com?subject=WHCH&body`,
              )
            }
            color="blue"
          />
        </View>
      </Text>
    </ScrollView>
  );
}

export default About;
