import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, Pressable } from 'react-native';
import { styles } from '../styles';
import * as React from 'react';
import { TodoItem } from '../components/TodoItem';
import { useNavigation } from '@react-navigation/native';
import * as DataStorage from '../storage/DataStorage';
import { useEffect, useState } from 'react';
import { Todo } from '../storage/DataStorage';
import TodoList from '../components/TodoList';
import { Props } from '../../App';
import TodoButton from '../components/TodoButton';

let initialTodos: Todo[] = [];

const HomeScreen = ({ route, navigation }: Props) => {

  const [todos, setTodos] = useState(initialTodos);

  async function getTodos() {
    setTodos(await DataStorage.getTodos());
  }

  function saveTodo(todo: string) {
    DataStorage.saveTodo(route.params.todo).then(() => {
      getTodos()
    })
  }

  function removeTodos() {
    DataStorage.removeTodos().then(() => {
      getTodos()
    })
  }

  useEffect(() => {
    if (route.params?.todo) {
      saveTodo(route.params.todo);
    } else {
      getTodos()
    }
  }, [route.params?.todo]);

  return (
    <View style={styles.container}>
      <TodoButton text='ADD A NEW TODO' onPress={() => navigation.navigate('NewTodo')} backgroundColor='#008CBA' />
      <TodoButton text='REMOVE TODOS' onPress={removeTodos} backgroundColor='red' />

      <Text style={styles.titleText}>Pending</Text>
      <TodoList todos={todos} />
      <Text style={styles.titleText}>Completed</Text>
      <TodoList todos={todos} />
    </View>
  );
};

export default HomeScreen;