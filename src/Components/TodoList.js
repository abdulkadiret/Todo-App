import React from 'react';

const TodoList = (props) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => (
          <li className={todo.completed ? 'completed' : ''}>
            <div className="view">
              <input
                className="toggle"
                type="checkbox"
                onChange={() => props.completeTodo(todo.value)}
              />
              <label>{todo.value}</label>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
