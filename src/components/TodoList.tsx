import { FlatList } from "react-native"
import { TodoItem } from "./TodoItem"
import { Todo } from "../storage/DataStorage"

type TodoListProps = {
	todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
	return (
		<FlatList
			data={todos}
			renderItem={({ item }) => <TodoItem title={item.title} />}
			keyExtractor={item => item.id}
		/>
	)
}
export default TodoList;