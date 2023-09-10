import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from './components/HomePage';
import CreateTask from './components/CreateTask';
import AddQuiz from './components/AddQuiz';
import TakeQuiz from './components/TakeQuiz';
import Quiz from './components/Quiz';
import Finish from './components/Finish';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="homepage"
        screenOptions={{
          headerStyle: {backgroundColor: '#003697'},
          headerTintColor: '#ffffff',
          headerTitleStyle: {color: 'white'},
          animation: 'slide_from_right',
        }}>
        <Stack.Screen
          name="homepage"
          component={HomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Create Quiz" component={CreateTask} />
        <Stack.Screen name="Add Quiz" component={AddQuiz} />
        <Stack.Screen name="Take Quiz" component={TakeQuiz} />
        <Stack.Screen
          name="Quiz"
          component={Quiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="finish"
          component={Finish}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
