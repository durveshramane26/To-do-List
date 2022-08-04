import React from 'react';
import './App.css';
import TodoFrom from './components/TodoFrom';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;
