import React, { createContext, useState, useEffect } from 'react';
import useSWR, { mutate } from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { data, error } = useSWR('/api/todo', fetcher);

  useEffect(() => {
    getData();
  }, [data, error]);

  const getData = () => {
    // Fetch the todos from the API
    if (data) {
      setTodos(data);
      setLoading(false);
    }
    if (error) {
      console.error('Error fetching todos:', error);
      setLoading(false);
    }
  };

  const addTodo = async (todo) => {
    const response = await fetch('/api/todo', {
      method: 'POST',
      body: JSON.stringify({ title: todo.title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const newTodo = await response.json();
      setTodos([...data, newTodo]);
      mutate('/api/todo', [...todos, newTodo], false);
    }
  };

  const removeTodo = async (id) => {
    const response = await fetch(`/api/todo`, {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      setTodos(todos.filter((todo) => todo.id !== id));
      mutate('/api/todo');
    }
  };

  const editTodo = async (todo, updateOne) => {
    console.log('todo ->', todo, 'curr one ', updateOne);
    const response = await fetch(`/api/todo/`, {
      method: 'PUT',
      body: JSON.stringify(updateOne),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // empty for purpose
    }
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, removeTodo, editTodo, loading }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
