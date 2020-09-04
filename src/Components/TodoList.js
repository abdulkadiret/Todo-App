import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  return (
    <section className="main">
      <ul className="todo-list">
        {props.todos.map((todo) => {
          return <TodoItem todo={todo} completeTodo={props.completeTodo} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
