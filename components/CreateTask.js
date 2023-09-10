import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  Text,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Edit from '../assets/edit.svg';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import Delete from '../assets/delete.svg';
import {useIsFocused} from '@react-navigation/native';

const RenderQuiz = ({item, deleteQuiz}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View>
        <Text style={[styles.text, {color: 'white', fontSize: 20}]}>
          {item.name}
        </Text>
        <Text style={[styles.text1, {color: 'lightgray', fontSize: 14}]}>
          Points : {item.duration}
        </Text>
        <Text style={[styles.text1, {color: 'lightgray', fontSize: 14}]}>
          Total Marks : {item.points}
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Add Quiz', {q: {...item}})}>
          <Edit />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteQuiz(item)}>
          <Delete />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CreateTask = () => {
  // const layout = useWindowDimensions();
  const navigation = useNavigation();
  const [quizes, setQuizes] = useState([]);
  const isFocused = useIsFocused();
  const deleteQuiz = async item => {
    firestore().collection('Quiz').doc(item.id).delete();
    setQuizes(prev => {
      return prev.filter(ele => ele.id !== item.id);
    });
  };

  useEffect(() => {
    (async function () {
      const quiz = await firestore().collection('Quiz').get();
      const items = [];
      quiz._docs.map(ele => {
        const id = ele.id;
        const data = ele.data();
        const item = {id, ...data};
        items.push(item);
      });
      setQuizes(items);
    })();
  }, [isFocused]);

  return (
    <View style={styles.container1}>
      <ScrollView style={{flex: 1}}>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: '#9EEEB0', width: 100, alignSelf: 'flex-end'},
          ]}
          onPress={() => navigation.navigate('Add Quiz', {q: null})}>
          <Text style={[styles.text1, {color: 'white'}]}>Add Quiz</Text>
        </TouchableOpacity>
        {quizes.map(ele => (
          <RenderQuiz item={ele} key={ele.id} deleteQuiz={deleteQuiz} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CreateTask;
