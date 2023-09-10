const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191970',
    gap: 100,
    padding: 10,
  },
  text: {
    fontFamily: 'sans-serif',
    fontWeight: '700',
    fontSize: 18,
  },
  text1: {
    fontFamily: 'sans-serif',
    fontWeight: '500',
    fontSize: 17,
  },
  button: {
    width: 300,
    height: 50,
    borderRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    padding: 10,
    backgroundColor: '#191970',
  },
  card: {
    backgroundColor: '#863B87',
    // borderWidth: 0.1,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
    width: '94%',
  },
  form: {
    gap: 20,
  },
  texInput: {
    backgroundColor: '#863B87',
    borderRadius: 10,
  },
  modal: {
    gap: 10,
    padding: 20,
    backgroundColor: '#191970',
    borderRadius: 10,
  },
  button1: {
    width: 300,
    height: 50,
    borderRadius: 10,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#863B87',
  },
  text2: {
    fontFamily: 'sans-serif',
    fontWeight: '500',
    fontSize: 17,
    color: 'white',
  },
});

module.exports = styles;
