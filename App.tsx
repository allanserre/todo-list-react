
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NewTodoScreen } from './src/screens/NewTodoScreen';
import React, { useState } from 'react';
import 'react-native-get-random-values';
import HomeScreen from './src/screens/HomeScreen';
import { Todo } from './src/storage/DataStorage';
import * as DataStorage from './src/storage/DataStorage';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: {
    todo: string
  };
  NewTodo: {
    title: string
  };
};

export type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {

  useState()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" options={{ title: 'Todo List' }} component={HomeScreen} />
        <Stack.Screen name="NewTodo" options={{ title: 'Add a new Todo' }} component={NewTodoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;
