import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    /* marginTop: StatusBar.currentHeight || 0, */
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    fontSize: 12,
  },

  centerText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontWeight: 'bold',
    color: 'black',
  },

  applePlaceholder: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    /* alignSelf: 'center', */
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },

});