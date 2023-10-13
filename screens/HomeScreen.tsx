import { StyleSheet, Text, View , Button, TextInput, Alert, FlatList} from 'react-native';
import { styles } from '../styles';
import * as React from 'react';
import { TaskItem } from '../components/TaskItem';


const TASK = [
  {
    id:"1",
    title: 'task 1'
  },
  {
    id:"2",
    title: 'task some'
  },
  {
    id:"3",
    title: 'task 43'
  },
  {
    id:"4",
    title: 'task;_sd'
  },
];

export const HomeScreen = ({navigation}) => {
   function addto() {
        return Alert.alert('click');
   }
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        onPress={() => navigation.push('NewTodo')}
        title="ADD A NEW TODO"
        color="blue"
      />
      <Button
        onPress={addto}
        title="REMOVE TODOS"
        color="red"
      />
        <Text style={styles.titleText}>Pending</Text>
        <FlatList
            data={TASK}
            renderItem={({item}) => <TaskItem title={item.title} />}
            keyExtractor={item => item.id}
          />
        <Text style={styles.titleText}>Completed</Text>
        <FlatList
            data={TASK}
            renderItem={({item}) => <TaskItem title={item.title} />}
            keyExtractor={item => item.id}
          />
    </View>
  );
};
