import React, { useState } from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  const [todoList, setTodList] = useState([]);

  const addTodoItem = (todoItemValue) => {
    setTodList(todoList.concat(todoItemValue));
  };

  return (
    <div className="todoapp">
      <Header addTodo={addTodoItem} />
      <TodoList todos={todoList} />
    </div>
  );
}

export default App;
