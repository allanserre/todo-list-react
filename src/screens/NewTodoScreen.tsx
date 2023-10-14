import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import { styles } from '../styles';
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Props } from '../../App';
import { Todo } from '../storage/DataStorage';
import TodoButton from '../components/TodoButton';

export const NewTodoScreen = ({ route, navigation }: Props) => {
    const [text, onChangeText] = React.useState('');

    function addTodo() {
        navigation.navigate({
            name: "Home",
            params: { todo: text }
        });
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
            <TodoButton text='ADD' onPress={addTodo} backgroundColor='#008CBA' />
        </View>
    );
}