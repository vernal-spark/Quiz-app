import {View, Text, TextInput} from 'react-native';
import {useState} from 'react';
import styles from './styles';

const Input = ({placeholder, value, handleChange, keyBoard}) => {
  return (
    <View style={{gap: 5}}>
      <Text style={[styles.text, {color: 'white'}]}>{placeholder} :</Text>
      <View style={styles.texInput}>
        <TextInput
          // editable={editable}
          value={value}
          onChangeText={text => handleChange(text)}
          selectionColor={'white'}
          placeholderTextColor={'rgba(255,255,255,0.5)'}
          style={{color: 'white'}}
          keyboardType={keyBoard}
        />
      </View>
    </View>
  );
};
export default Input;
