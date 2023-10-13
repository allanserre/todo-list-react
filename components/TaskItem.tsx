import { Text, View} from 'react-native';
import { styles } from '../styles'

export const TaskItem = ({title}) => (
  <View style={styles.taskItemContainer}>
    <Text style={styles.titleText}>{title}</Text>
  </View>
);
