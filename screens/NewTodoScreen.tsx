import { StyleSheet, Text, View , Button, TextInput} from 'react-native';
import { styles } from '../styles';
import * as React from 'react';
//import DataStorage from '../storage/DataStorage';

export const NewTodoScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState('');

    function addTodo(){
     //   DataStorage.saveTodo(text)
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Task Name</Text>
             <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Describe the task"
             />
             <Button
                     onPress={addTodo}
                     title="ADD"
                     color="blue"
             />
        </View>
    );
}