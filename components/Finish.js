import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js';

const Finish = ({route}) => {
  const navigation = useNavigation();
  const {count} = route.params;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('homepage');
    }, 5000);
  }, []);
  return (
    <View style={[styles.container, {backgroundColor: '#9EEEB0', gap: 10}]}>
      <Text style={styles.text}>Congrats! You have finished the test</Text>
      <Text style={styles.text}>You scored:{count}</Text>
      <TouchableOpacity
        style={styles.button1}
        onPress={() => navigation.navigate('Take Quiz')}>
        <Text style={styles.text}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Finish;
