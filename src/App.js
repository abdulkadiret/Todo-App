import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import shortid from 'shortid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [toggleAllTodoItems, setToggleAllTodoItems] = useState(false);

  const addTodoItem = (todoItemValue) => {
    const newTodoItem = {
      id: shortid(),
      value: todoItemValue,
      completed: false,
    };
    // setTodoList([newTodoItem, ...todoList]);
    setTodoList([newTodoItem].concat(todoList));
  };

  const completeTodoItem = (id) => {
    const updatedTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(updatedTodo);
  };

  const deleteTodoItem = (id) => {
    const updatedTodo = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodo);
  };

  const filterTodoItems = (filter) => {
    setFilter(filter);
  };

  const removeAllCompletedTodoItems = () => {
    setTodoList(todoList.filter((todo) => !todo.completed));
  };

  const handleToggleAllTodoItems = () => {
    const isCompleted = todoList.every((todo) => todo && todo.completed);
    const updatedTodo = todoList.map((todo) => {
      todo.completed = !isCompleted;
      return todo;
    });
    setTodoList(updatedTodo);
    setToggleAllTodoItems(toggleAllTodoItems);
  };

  return (
    <div className="todoapp">
      <Header addTodo={addTodoItem} />
      <TodoList
        todos={todoList}
        filter={filter}
        completeTodo={completeTodoItem}
        deleteTodo={deleteTodoItem}
        handleToggleAllTodoItems={handleToggleAllTodoItems}
      />
      <Footer
        todos={todoList}
        filter={filter}
        filterTodoItems={filterTodoItems}
        removeAllCompletedTodoItems={removeAllCompletedTodoItems}
      />
    </div>
  );
}

export default App;
