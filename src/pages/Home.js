import React, { useEffect, useContext } from 'react';
import TodoHeader from 'components/TodoHeader';
import TodoToggleAll from 'components/TodoToggleAll';
import TodoList from 'components/TodoList';
import TodoFooter from 'components/TodoFooter';
import { TodosContext, FilterContext, AuthContext } from 'contexts';
import { login } from 'api/auth';
import { getList, addTask, checkedTask, editTask, removeTask } from 'api/todos';
import { getStorage, setStorage } from 'services/storage';
import { setLocation, getHash } from 'services/location';

// test name
const NAME = 'developers';

export const Home = props => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  const { todos, initTodos, addTodo, removeTodo, updateTodo } = useContext(TodosContext);
  const { activeFilter, filters, toggleFilter } = useContext(FilterContext);

  useEffect(() => {
    // const storage = getStorage({ name: NAME });
    // if (Array.isArray(storage)) {
    //   initTodos(storage);
    // }

    !isAuth &&
      login(NAME).then(res => {
        if (res.access_token) {
          toggleAuth(true);
          getList().then(res => {
            if (Array.isArray(res)) {
              initTodos(res);
            }
          });
        }
      });

    const filter = getHash();
    if (filter) {
      toggleFilter(filter);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filteredTodos = () => {
    if (activeFilter.checked !== null) {
      return todos.filter(item => item.checked === activeFilter.checked);
    } else {
      return todos;
    }
  };

  const onAdd = async data => {
    const res = addTask(data);
    if (res._id) {
      addTodo(res);
    }

    setStorage({ name: NAME, value: todos });
  };

  const onCheck = todoItem => async () => {
    const res = await checkedTask(todoItem._id);
    if (res._id) {
      updateTodo(res);
    }
  };

  const onDelete = todoItem => async () => {
    const res = await removeTask(todoItem._id);
    if (!res.message) {
      removeTodo(todoItem._id);
    }
  };

  const onUpdate = async ({ item, text }) => {
    if (item.value !== text.value) {
      const res = await editTask({ _id: item._id, value: text.value, priority: item.priority });
      if (res._id) {
        updateTodo(res);
      }
    }
  };

  const updateFilter = filterItem => e => {
    e.preventDefault();
    toggleFilter(filterItem.name);
    setLocation(filterItem.name);
  };

  return (
    <section className="todoapp">
      <TodoHeader onAdd={onAdd} />
      <section className="main">
        <TodoToggleAll />
        <TodoList todos={filteredTodos()} onCheck={onCheck} onDelete={onDelete} onUpdate={onUpdate} />
      </section>
      <TodoFooter activeFilter={activeFilter} filters={filters} updateFilter={updateFilter} />
    </section>
  );
};
