import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
  let todos = [];
  if (props.filter === 'all') {
    todos = props.todos;
  } else if (props.filter === 'active') {
    todos = props.todos.filter((todo) => !todo.completed);
  } else if (props.filter === 'completed') {
    todos = props.todos.filter((todo) => todo.completed);
  }

  return (
    <section className="main">
      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              completeTodo={props.completeTodo}
              deleteTodo={props.deleteTodo}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
