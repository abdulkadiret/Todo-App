import React from 'react';

const Header = () => {
  return (
    <header id="header">
      <h1>Todo App</h1>
      <form>
        <input
          className="new-todo"
          type="text"
          placeholder="Enter new task"
          autoFocus
        />
      </form>
    </header>
  );
};

export default Header;
