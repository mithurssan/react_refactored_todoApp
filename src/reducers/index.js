const initState = [];

const TodosReducer = (state = initState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload]
        case "REMOVE_TODO":
            return state.filter(el => el !== action.payload)
        case 'UPDATE_TODO':
            return state.map(todo => {
                if (todo === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            });
        default:
            return state
    }
}

export default TodosReducer
