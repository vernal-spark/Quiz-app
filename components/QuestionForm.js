/* eslint-disable react/react-in-jsx-scope */
import {View, TouchableOpacity, Text} from 'react-native';

import Input from './Input';
import {useState} from 'react';
import styles from './styles';

const QuestionForm = ({
  toggleModal,
  question,
  setQuestion,
  handleAddQuestion,
}) => {
  const setQues = e => {
    setQuestion(ques => ({...ques, question: e}));
  };
  const setOption1 = e => {
    setQuestion(ques => ({...ques, option1: e}));
  };
  const setOption2 = e => {
    setQuestion(ques => ({...ques, option2: e}));
  };
  const setOption3 = e => {
    setQuestion(ques => ({...ques, option3: e}));
  };
  const setOption4 = e => {
    setQuestion(ques => ({...ques, option4: e}));
  };
  const setAnswer = e => {
    setQuestion(ques => ({...ques, answer: e}));
  };
  return (
    <View style={styles.modal}>
      <TouchableOpacity style={{alignSelf: 'flex-end'}} onPress={toggleModal}>
        <Text style={(styles.text, {color: 'white'})}>X</Text>
      </TouchableOpacity>
      <Input
        placeholder={'Question'}
        value={question.question}
        handleChange={setQues}
      />
      <View style={{gap: 10}}>
        <Input
          placeholder={'Option 1'}
          value={question.option1}
          handleChange={setOption1}
        />
        <Input
          placeholder={'Option 2'}
          value={question.option2}
          handleChange={setOption2}
        />
        <Input
          placeholder={'Option 3'}
          value={question.option3}
          handleChange={setOption3}
        />
        <Input
          placeholder={'Option 4'}
          value={question.option4}
          handleChange={setOption4}
        />
      </View>
      <Input
        placeholder={'Correct Answer'}
        value={question.answer}
        handleChange={setAnswer}
      />
      <TouchableOpacity
        style={[
          styles.button,
          {backgroundColor: '#9EEEB0', width: 120, alignSelf: 'flex-end'},
        ]}
        onPress={handleAddQuestion}>
        <Text style={[styles.text, {color: 'white'}]}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};
export default QuestionForm;
