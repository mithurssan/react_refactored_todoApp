import TodoItem from "../TodoItem";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from '../../actions'

function TodoList({ filteredTodos }) {
	const dispatch = useDispatch();

	function deleteTodo(todo) {
		dispatch(removeTodo(todo));
	}

	function completeTodo(todo) {
		dispatch(updateTodo(todo))
	}

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo, i) => <TodoItem todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} key={i} />)}
			</ul>
		</div>
	)
}

export default TodoList;
