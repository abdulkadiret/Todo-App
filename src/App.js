import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import Footer from './Components/Footer';
import shortid from 'shortid';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodoItem = (todoItemValue) => {
    const newTodoItem = {
      id: shortid(),
      value: todoItemValue,
      completed: false,
    };
    // setTodoList([...todoList, newTodoItem]);
    setTodoList(todoList.concat(newTodoItem));
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

  const filterTodos = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="todoapp">
      <Header addTodo={addTodoItem} />
      <TodoList
        todos={todoList}
        filter={filter}
        completeTodo={completeTodoItem}
        deleteTodo={deleteTodoItem}
      />
      <Footer todos={todoList} filter={filter} filterTodos={filterTodos} />
    </div>
  );
}

export default App;
