import React, { useState } from 'react';

const Header = (props) => {
  const [todoValue, setTodoValue] = useState('');

  const handleChange = (e) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoValue !== '') {
      props.addTodo(todoValue);
      setTodoValue('');
    }
  };

  return (
    <header id="header">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          type="text"
          placeholder="Enter new task"
          autoFocus
          value={todoValue}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Header;
