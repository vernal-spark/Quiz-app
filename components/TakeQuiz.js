import firestore from '@react-native-firebase/firestore';
import {useIsFocused} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {useState, useEffect} from 'react';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';

const RenderQuiz = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Quiz', {item: item})}>
      <View>
        <Text style={[styles.text, {color: 'white', fontSize: 20}]}>
          {item.name}
        </Text>
        <Text style={[styles.text1, {color: 'lightgray', fontSize: 14}]}>
          {item.description}
        </Text>
        <Text style={[styles.text1, {color: 'lightgray', fontSize: 14}]}>
          Points : {item.duration}
        </Text>
        <Text style={[styles.text1, {color: 'lightgray', fontSize: 14}]}>
          Total Marks : {item.points}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TakeQuiz = () => {
  const [quizes, setQuizes] = useState([]);
  const isFocused = useIsFocused();

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
      {quizes.map(ele => (
        <RenderQuiz item={ele} key={ele.id} />
      ))}
    </View>
  );
};

export default TakeQuiz;
