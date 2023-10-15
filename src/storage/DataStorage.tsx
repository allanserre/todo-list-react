import * as SecureStore from 'expo-secure-store';
import { v4 as uuidv4 } from 'uuid';

const key = 'todos';

export enum TodoState {
  COMPLETED,
  PENDING
}

export interface Todo {
  id: string,
  title: string,
  state: TodoState
}

export async function saveTodo(value: string) {
  let todos = await getTodos();

  let todo: Todo = {
    id: uuidv4(),
    title: value,
    state: TodoState.PENDING
  }
  todos.push(todo)
  await SecureStore.setItemAsync(key, JSON.stringify(todos));
}

export async function getTodos(): Promise<Todo[]> {
  let result = await SecureStore.getItemAsync(key);
  let todos: Todo[] = [];
  if (result)
    todos = JSON.parse(result);
  return todos;
}

export async function removeTodos() {
  await SecureStore.deleteItemAsync(key);
}

export async function removeTodo(id: string) {
  let todos = await getTodos();
  todos = todos.filter(todo => todo.id !== id)
  await SecureStore.setItemAsync(key, JSON.stringify(todos));
}

export async function completeTodo(id: string) {
  let todos = await getTodos();
  let todo = todos.find(todo => todo.id == id)
  if (todo) {
    todo.state = TodoState.COMPLETED;
  }
  await SecureStore.setItemAsync(key, JSON.stringify(todos));
}

export async function pendingTodo(id: string) {
  let todos = await getTodos();
  let todo = todos.find(todo => todo.id == id)
  if (todo) {
    todo.state = TodoState.PENDING;
  }
  await SecureStore.setItemAsync(key, JSON.stringify(todos));
}





