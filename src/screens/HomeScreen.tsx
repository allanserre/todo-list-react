import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, Pressable } from 'react-native';
import { styles } from '../styles';
import * as React from 'react';
import { TodoItem } from '../components/TodoItem';
import { useNavigation } from '@react-navigation/native';
import * as DataStorage from '../storage/DataStorage';
import { useEffect, useState } from 'react';
import { Todo, TodoState } from '../storage/DataStorage';
import TodoList from '../components/TodoList';
import { Props } from '../../App';
import TodoButton from '../components/TodoButton';

let initialTodos: Todo[] = [];

const HomeScreen = ({ route, navigation }: Props) => {

  const [todos, setTodos] = useState(initialTodos);

  const completedTodos = todos.filter(todo => todo.state == TodoState.COMPLETED)
  const pendingTodos = todos.filter(todo => todo.state == TodoState.PENDING)

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

  function removeTodo(id: string) {
    DataStorage.removeTodo(id).then(() => {
      getTodos()
    })
  }

  function completeTodo(id: string) {
    DataStorage.completeTodo(id).then(() => {
      getTodos()
    })
  }

  function pendingTodo(id: string) {
    DataStorage.pendingTodo(id).then(() => {
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

      <Text style={[styles.titleText, styles.titleList]}>Pending</Text>
      <TodoList todos={pendingTodos} leftSwipe={completeTodo} rightSwipe={removeTodo} />
      <Text style={[styles.titleText, styles.titleList]}>Completed</Text>
      <TodoList todos={completedTodos} leftSwipe={pendingTodo} rightSwipe={removeTodo} />
    </View>
  );
};

export default HomeScreen;