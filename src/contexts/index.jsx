import React, { useState, useContext, createContext } from "react";

const TodosContext = createContext();
const StatusContext = createContext();

export const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    );
};

export const StatusProvider = ({ children }) => {
    const [status, setStatus] = useState("all");

    return (
        <StatusContext.Provider value={{ status, setStatus }}>
            {children}
        </StatusContext.Provider>
    );
};

export const useTodos = () => useContext(TodosContext);
export const useStatus = () => useContext(StatusContext);
