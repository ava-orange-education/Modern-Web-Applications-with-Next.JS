import React, { useContext, useState } from 'react';
import { TodoContext } from '../../store/TodoContext';

const TodoItem = ({ id, title }) => {
  const { todos, addTodo, removeTodo, editTodo } = useContext(TodoContext);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleRemove = () => {
    removeTodo(id);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    if (editedTitle.trim() !== '') {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: editedTitle };
        }
        return todo;
      });
      editTodo(updatedTodos);
      setEditMode(false);
    }
  };

  const handleCancel = () => {
    setEditedTitle(title);
    setEditMode(false);
  };

  const handleChange = (e) => {
    setEditedTitle(e.target.value);
  };

  return (
    <li>
      {editMode ? (
        <>
          <input type="text" value={editedTitle} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <span>{editedTitle}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={handleRemove}>Remove</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
