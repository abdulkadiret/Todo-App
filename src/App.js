import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import shortid from 'shortid';

function App() {
  const [todoList, setTodoList] = useState([]);

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

  return (
    <div className="todoapp">
      <Header addTodo={addTodoItem} />
      <TodoList
        todos={todoList}
        completeTodo={completeTodoItem}
        deleteTodo={deleteTodoItem}
      />
    </div>
  );
}

export default App;
