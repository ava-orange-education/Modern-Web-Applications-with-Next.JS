import React, { useContext, useState } from 'react';

import { TodoContext } from '../../store/TodoContext';
import TodoItem from './TodoItem';

const TodoApp = () => {
  const { todos, addTodo } = useContext(TodoContext);
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (title.trim() !== '') {
      const newTodo = {
        id: Math.random(),
        title: title.trim(),
      };
      addTodo(newTodo);
      setTitle('');
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter a new task"
      />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
