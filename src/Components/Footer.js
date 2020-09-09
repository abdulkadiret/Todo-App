import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{props.todos.filter((todo) => !todo.completed).length}</strong>{' '}
        item
        {props.todos.filter((todo) => !todo.completed).length === 1
          ? ''
          : 's'}{' '}
        left
      </span>
      <ul className="filters">
        <li>
          <button
            onClick={() => props.filterTodoItems('all')}
            className={props.filter === 'all' ? 'selected' : ''}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => props.filterTodoItems('active')}
            className={props.filter === 'active' ? 'selected' : ''}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => props.filterTodoItems('completed')}
            className={props.filter === 'completed' ? 'selected' : ''}
          >
            Completed
          </button>
        </li>
      </ul>
      {props.todos.some((todo) => todo.completed) ? (
        <button
          className="clear-completed"
          onClick={props.removeAllCompletedTodoItems}
        >
          Clear-completed
        </button>
      ) : null}
    </footer>
  );
};

export default Footer;
