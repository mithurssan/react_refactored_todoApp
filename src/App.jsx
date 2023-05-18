import React, { useState, useEffect } from 'react';
import { useTodos, useStatus } from './contexts';
import { TodoForm, TodoList } from './components';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const { status, setStatus } = useStatus();
  const { todos, setTodos } = useTodos();
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler()
  }, [status, todos])

  function filterHandler() {
    if (status === 'completed') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    } else if (status === 'uncompleted') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    } else {
      setFilteredTodos(todos);
    }
  }

  return (
    <div>
      <header>Sarah's Todo List</header>
      <TodoForm inputText={inputText} setInputText={setInputText} />
      <TodoList filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
