import React, { useState, useContext, createContext } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    );
};

export const useTodos = () => useContext(TodosContext);
