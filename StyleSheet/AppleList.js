import {StyleSheet, StatusBar} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    /* marginTop: StatusBar.currentHeight || 0, */
  },
  item: {
    flexDirection: 'row',
    backgroundColor: 'crimson',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  title: {
    flex: 1,
        fontSize: 20,
        padding: 10,
        flexDirection: 'row',
        color: 'white',
        alignItems: 'center',
        alignSelf: 'center',
        fontWeight: 'bold',
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
    flexDirection: 'column',
  },

});