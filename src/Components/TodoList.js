import React from 'react';

const TodoList = (props) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <li>{todo.value}</li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
