/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import Input from './Input';
import {View, TouchableOpacity, Text, ScrollView, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import styles from './styles';
import {useEffect, useState} from 'react';
import QuestionForm from './QuestionForm';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';

const QuizForm = ({quiz, setQuiz}) => {
  const navigation = useNavigation();
  const [question, setQuestion] = useState({
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  });
  const [visible, setVisible] = useState(false);
  const toggleModal = () => {
    console.log(visible);
    setVisible(prev => !prev);
  };
  const setName = e => {
    setQuiz(prev => ({...prev, name: e}));
  };
  const setDescription = e => {
    setQuiz(prev => ({...prev, description: e}));
  };
  const setPoints = e => {
    setQuiz(prev => ({...prev, points: e}));
  };
  const setDuration = e => {
    setQuiz(prev => ({...prev, duration: e}));
  };
  const deleteQuestion = item => {
    setQuiz(prev => {
      const q = prev.questions.filter(ele => ele.question !== item.question);
      console.log(q);
      return {...prev, questions: q};
    });
  };
  const handleAddQuestion = () => {
    setQuiz(prev => ({...prev, questions: [...prev.questions, question]}));
    setQuestion({
      question: '',
      option1: '',
      option2: '',
      option3: '',
      option4: '',
      answer: '',
    });
    toggleModal();
  };

  const addQuiz = async () => {
    firestore()
      .collection('Quiz')
      .add({...quiz})
      .then(() => {
        // console.log('Quiz added');
        setQuiz({
          name: null,
          description: null,
          points: null,
          duration: null,
          questions: [],
        });
        navigation.navigate('Create Quiz');
      });
  };

  const updateQuiz = async () => {
    firestore()
      .collection('Quiz')
      .doc(quiz.id)
      .update({...quiz})
      .then(() => {
        navigation.navigate('Create Quiz');
      });
  };

  const renderQuestions = ({item}) => {
    return (
      <View style={styles.card}>
        <View>
          <Text style={[styles.text, {color: 'white', fontSize: 20}]}>
            {item.question}
          </Text>
        </View>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            onPress={() => {
              deleteQuestion(item);
            }}>
            <Delete />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Input
          placeholder={'Quiz Name'}
          value={quiz.name}
          handleChange={setName}
        />
        <Input
          placeholder={'Description'}
          value={quiz.description}
          handleChange={setDescription}
        />
        <Input
          placeholder={'Total Points'}
          value={quiz.points}
          handleChange={setPoints}
          keyBoard="numeric"
        />
        <Input
          placeholder={'Duration(mins)'}
          value={quiz.duration}
          handleChange={setDuration}
          keyBoard="numeric"
        />
        <View style={{gap: 5}}>
          <Text style={[styles.text1, {color: 'white'}]}>Questions</Text>
          {quiz.questions && quiz.questions.length > 0 && (
            <FlatList data={quiz.questions} renderItem={renderQuestions} />
          )}
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#863B87', width: 120}]}>
            <Text
              style={[styles.text1, {color: 'white'}]}
              onPress={toggleModal}>
              Add Question
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          isVisible={visible}
          backdropOpacity={0.5}
          animationIn={'slideInUp'}
          animationInTiming={1000}>
          <QuestionForm
            toggleModal={toggleModal}
            question={question}
            setQuestion={setQuestion}
            handleAddQuestion={handleAddQuestion}
            // handleUpdateQuestion={handleUpdateQuestion}
          />
        </Modal>
        <TouchableOpacity
          style={[
            styles.button,
            {backgroundColor: '#9EEEB0', width: 120, alignSelf: 'flex-end'},
          ]}
          onPress={quiz.id ? updateQuiz : addQuiz}>
          <Text style={[styles.text, {color: 'white'}]}>
            {quiz.id ? 'Update' : 'Submit'}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default QuizForm;
