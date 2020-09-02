import React from 'react';
import Header from './Components/Header';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="todoapp">
      <Header />
      <TodoList />
    </div>
  );
}

export default App;
