
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { NewTodoScreen } from './screens/NewTodoScreen';
import React from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
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
