import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';
import shortid from 'shortid';

function App() {
  const [todoList, setTodList] = useState([]);

  const addTodoItem = (todoItemValue) => {
    const newTodoItem = {
      id: shortid(),
      value: todoItemValue,
      completed: false,
    };
    setTodList(todoList.concat(newTodoItem));
  };

  const completeTodoItem = (id) => {
    const updatedTodo = todoList.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodList(updatedTodo);
  };

  return (
    <div className="todoapp">
      <Header addTodo={addTodoItem} />
      <TodoList todos={todoList} completeTodo={completeTodoItem} />
    </div>
  );
}

export default App;
