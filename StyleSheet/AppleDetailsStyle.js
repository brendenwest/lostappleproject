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
    /* flex: 1, */
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 8,
        /* flexDirection: 'row', */
    backgroundColor: 'crimson',
    /* alignItems: 'center', */
    alignSelf: 'stretch',
  },

  titleText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',

  },

  locText: {
    textAlign: 'center',
    fontSize: 15,
    padding: 1,
    fontWeight: 'bold',
    color: 'black',
  },

  applePlaceholder: {
    width: 120,
    height: 120,
    margin: 10,
    backgroundColor: 'green',
    /* alignSelf: 'center', */
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    flexDirection: 'column',
  },

  descText: {
    backgroundColor: 'antiquewhite',
    color: 'black',
    alignItems: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
    padding: 15,
    width: '80%',
  },

});