import { Text, View } from 'react-native';
import { styles } from '../styles'


type TodoItemProps = { title: string, };

export const TodoItem = ({ title }: TodoItemProps) => (
  <View style={styles.taskItemContainer}>
    <Text style={styles.titleText}>{title}</Text>
  </View>
);
