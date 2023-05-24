export const addTodo = (todo) => (
    { type: "ADD_TODO", payload: todo }
)

export const removeTodo = (todo) => (
    { type: "REMOVE_TODO", payload: todo }
)

export const updateTodo = (todo) => (
    { type: 'UPDATE_TODO', payload: todo }
);



