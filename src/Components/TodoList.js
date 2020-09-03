import React from 'react';

const TodoList = (props) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
