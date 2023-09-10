import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Input from './Input';
import QuizForm from './QuizForm';
import styles from './styles';

const AddQuiz = ({route}) => {
  const {q} = route.params;

  const [quiz, setQuiz] = useState(
    q
      ? q
      : {
          name: null,
          description: null,
          points: null,
          duration: null,
          questions: [],
        },
  );
  return (
    <View style={styles.container1}>
      <QuizForm quiz={quiz} setQuiz={setQuiz} />
    </View>
  );
};

export default AddQuiz;
