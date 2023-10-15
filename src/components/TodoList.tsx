import { FlatList } from "react-native"
import { TodoItem } from "./TodoItem"
import { Todo } from "../storage/DataStorage"

type TodoListProps = {
	todos: Todo[];
	leftSwipe?: (id: string) => void | undefined;
	rightSwipe?: (id: string) => void | undefined;
}

const TodoList = (props: TodoListProps) => {
	return (
		<FlatList
			data={props.todos}
			renderItem={({ item }) => <TodoItem todo={item} title={item.title} leftSwipe={props.leftSwipe} rightSwipe={props.rightSwipe} />}
			keyExtractor={item => item.id}
		/>
	)
}
export default TodoList;