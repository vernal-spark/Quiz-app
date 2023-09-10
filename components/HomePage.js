import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.text, {color: '#fff', fontSize: 40}]}>
          Astro Quiz
        </Text>
      </View>
      <View style={{gap: 10}}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: '#863B87'}]}
          onPress={() => navigation.navigate('Create Quiz')}>
          <Text style={[styles.text, {color: 'white'}]}>
            Create or Edit Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'white'}]}
          onPress={() => navigation.navigate('Take Quiz')}>
          <Text style={[styles.text, {color: '#863B87'}]}>Take a Quiz</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomePage;
