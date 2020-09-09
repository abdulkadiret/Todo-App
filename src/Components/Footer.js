import React from 'react';

const Footer = (props) => {
  return (
    <footer className="footer">
      <ul className="filters">
        <li>
          <a
            href="#"
            onClick={() => props.filterTodos('all')}
            className={props.filter === 'all' ? 'selected' : ''}
            role="button"
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => props.filterTodos('active')}
            className={props.filter === 'active' ? 'selected' : ''}
            role="button"
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#"
            onClick={() => props.filterTodos('completed')}
            className={props.filter === 'completed' ? 'selected' : ''}
            role="button"
          >
            Completed
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
