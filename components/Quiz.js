import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CountDown from 'react-native-countdown-component';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

function CountDownTimer({timer}) {
  const [time, setTime] = React.useState(timer || 10);
  const timerRef = React.useRef(time);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      timerRef.current -= 1;
      if (timerRef.current < 0) {
        clearInterval(timerId);
      } else {
        setTime(timerRef.current);
      }
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <View style={{justifyContent: 'center', alignSelf: 'flex-end'}}>
      <Text style={styles.text}> {time} </Text>
    </View>
  );
}

const Questions = ({questions, setTime}) => {
  const q = useRef(questions);
  const [selected, setSelected] = useState(0);
  const [question, setQuestion] = useState({...q.current[0], id: 0});
  const [answer, setAnswer] = useState(q.current.map((e, i) => ({[i]: null})));
  const correctAnswer = useRef(q.current.map((e, i) => ({answer: e.answer})));
  const navigation = useNavigation();
  useEffect(() => {
    setQuestion({...q.current[selected], id: selected});
  }, [selected]);

  const handleNext = () => {
    if (selected === q.current.length - 1) {
      let count = 0;
      for (let i = 0; i < correctAnswer.current.length; i++) {
        console.log(correctAnswer.current[i], answer[i]);
        if (correctAnswer.current[i].answer === answer[i]) {
          count++;
        }
      }
      setTime(0);
      navigation.navigate('finish', {count});
    } else {
      setSelected(selected => selected + 1);
    }
  };

  return (
    <>
      <View
        style={{
          marginTop: 10,
          borderTopWidth: 0.5,
          borderBottomWidth: 0.5,
          borderColor: 'white',
        }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          {q.current.map((ele, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setSelected(i)}
              style={[
                {
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  backgroundColor: selected === i ? 'white' : '#191970',
                },
                {marginLeft: 10},
              ]}>
              <Text
                style={
                  (styles.text, {color: selected === i ? '#9EEEB0' : 'white'})
                }>
                {i + 1}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={(styles.text, {color: 'white', fontSize: 20})}>
          {question.question}
        </Text>
        <View style={{marginTop: 20, gap: 10}}>
          <TouchableOpacity
            style={[
              styles.button1,
              answer[selected] === question.option1 && {
                backgroundColor: '#9EEEB0',
              },
            ]}
            onPress={() =>
              setAnswer(prev => ({...prev, [selected]: question.option1}))
            }>
            <Text style={styles.text2}>{question.option1}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button1,
              answer[selected] === question.option2 && {
                backgroundColor: '#9EEEB0',
              },
            ]}
            onPress={() =>
              setAnswer(prev => ({...prev, [selected]: question.option2}))
            }>
            <Text style={styles.text2}>{question.option2}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button1,
              answer[selected] === question.option3 && {
                backgroundColor: '#9EEEB0',
              },
            ]}
            onPress={() =>
              setAnswer(prev => ({...prev, [selected]: question.option3}))
            }>
            <Text style={styles.text2}>{question.option3}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button1,
              answer[selected] === question.option4 && {
                backgroundColor: '#9EEEB0',
              },
            ]}
            onPress={() =>
              setAnswer(prev => ({...prev, [selected]: question.option4}))
            }>
            <Text style={styles.text2}>{question.option4}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.button,
            {
              marginTop: 100,
              backgroundColor: '#9EEEB0',
              alignSelf: 'flex-end',
              width: 100,
            },
          ]}
          onPress={handleNext}>
          <Text style={styles.text2}>Next</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const Quiz = ({route}) => {
  const questions = route.params.item.questions;
  const [time, setTime] = useState(route.params.item.duration);
  return (
    <View style={styles.container1}>
      <CountDownTimer timer={time * 60} />
      <Questions questions={questions} setTime={setTime} />
    </View>
  );
};

export default Quiz;
