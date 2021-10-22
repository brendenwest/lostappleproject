import React from 'react';
import {Text, ScrollView} from 'react-native';
import styles from '../StyleSheet/About';

function About() {
  return (
    <ScrollView>
      <Text style={styles.Rectangle}>Logo placeholder</Text>
      <Text style={styles.square}>Image placeholder</Text>
      <Text style={styles.centerText}>
        Organized in 1972, the Whitman County Historical Society strives to
        preserve the history and cultural heritage of our region. To do this the
        society has developed programs designed to meet a variety of interests
        in the area. The society owns two museums, three historic buildings,
        publishes a newsletter and a historical journal, and maintains a growing
        archival collection. In addition, the Historical Society has a number of
        on going projects.
      </Text>
      <Text style={styles.square}>Image placeholder</Text>
      <Text style={styles.centerText}>
        In 2017 a total of 200 apple varieties were sent to experts in Oregon
        for testing, resulting in five new re-discovered apples and many
        considered heirloom types. Since 2016 four lost (thought to be extinct)
        apple varieties from the Palouse have been located and identified: Nero,
        Arkansas Beauty, Dickinson, and McAfee. The Fall Jeneting, located in
        Colfax, became the second known re-discovery of this variety.
        Additionally four other lost apples from locations in Washington and
        Idaho have been re-discovered through the efforts of Lost Apple Project
        (LAP).
      </Text>
      <Text style={styles.square}>Image placeholder</Text>
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
        {'\b'} Contact placeholder
      </Text>
    </ScrollView>
  );
}

export default About;
