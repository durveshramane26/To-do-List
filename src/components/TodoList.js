import React, { useState } from 'react'
import TodoFrom from './TodoFrom'


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if(!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }

  const newTodos = [todo, ...todos];

  setTodos(newTodos);
  

}

  return (
    <div>
        <h1>What's the Plan for Today?</h1>
        <TodoFrom onSubmit={addTodo}/>
    </div>
  )
}

export default TodoList