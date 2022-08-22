import React, { useState } from 'react';
import { TodosContext } from './index';
import { Todo } from 'models/todo';

export const TodosProvider = props => {
  const { children } = props;
  const [todos, setTodos] = useState([]);

  const initTodos = todos => {
    setTodos(todos);
  };

  const addTodo = todo => {
    setTodos(todos.concat(new Todo(todo)));
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo._id !== id));
  };

  const toggleTodo = id => {
    setTodos(
      todos.map(item => {
        if (item._id === id) {
          return { ...item, checked: !item.checked };
        }

        return item;
      })
    );
  };

  const updateTodo = todo => {
    setTodos(
      todos.map(item => {
        if (item._id === todo._id) {
          return new Todo(todo);
        }

        return item;
      })
    );
  };

  return (
    <TodosContext.Provider value={{ todos, initTodos, addTodo, removeTodo, toggleTodo, updateTodo }}>
      {children}
    </TodosContext.Provider>
  );
};
