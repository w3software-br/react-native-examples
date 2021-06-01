import { StyleSheet } from 'react-native';

const basic = StyleSheet.create({
  container: {
    marginTop: 20, 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  separator: {
    marginVertical: 20,
    borderColor: '#ddd',
    borderWidth: StyleSheet.hairlineWidth,
  },

  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    
  },

  intro: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 20, 
    backgroundColor: '#56f',
    color: 'yellow'
  },

  textInput: { height: 40, 
    borderColor: 'gray', 
    borderWidth: 3,
    width: 300 
  },

  phrase: {
    textAlign: 'center',
    fontSize: 20,
    padding: 5,
    margin: 5
  }
});

export default basic;