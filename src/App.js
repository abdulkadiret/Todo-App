import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  const [todoList, setTodList] = useState([]);

  const addTodoItem = (todoItemValue) => {
    const newTodoItem = {
      value: todoItemValue,
      completed: false,
    };
    setTodList(todoList.concat(newTodoItem));
  };

  const completeTodoItem = (todoItemValue) => {
    const updatedTodo = todoList.map((todo) => {
      if (todo.value === todoItemValue) {
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
