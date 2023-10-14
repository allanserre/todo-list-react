import { Pressable, Text } from "react-native"
import { styles } from '../styles';

type TodoButtonProps = {
	backgroundColor: string,
	text: string,
	onPress?: () => void
}

const TodoButton = (props: TodoButtonProps) => {
	return (
		<Pressable
			style={[styles.button, { backgroundColor: props.backgroundColor }]}
			onPress={props.onPress}>
			<Text style={styles.buttonText}>{props.text}</Text>
		</Pressable>
	)
}

export default TodoButton;