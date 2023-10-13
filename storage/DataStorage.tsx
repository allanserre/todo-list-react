/*import * as SecureStore from 'expo-secure-store';

const key = 'todos';


export async function saveTodo(value : string) {
  let res = getTodos();
  let todos = JSON.parse(res)
  todos.push(value)
  await SecureStore.setItemAsync(key, value);
}

export async function getTodos() {
  let result = await SecureStore.getItemAsync(key);
  return result
}*/


