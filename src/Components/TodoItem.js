import React from 'react';

const TodoItem = (props) => {
  const handleCompleted = () => {
    props.completeTodo(props.todo.id);
  };

  return (
    <li className={props.todo.completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleCompleted} />
        <label>{props.todo.value}</label>
      </div>
    </li>
  );
};

export default TodoItem;
