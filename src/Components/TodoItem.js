import React, { useState } from 'react';

const TodoItem = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [itemNewValue, setItemNewValue] = useState(props.todo.value);

  const handleCompleted = () => {
    props.completeTodo(props.todo.id);
  };

  const handleDelete = () => {
    props.deleteTodo(props.todo.id);
  };

  const enableEditMode = () => {
    setEditMode(true);
  };

  const handleItemNewValue = (e) => {
    const editedValue = e.target.value;
    setItemNewValue(editedValue);
  };

  const handleUpdateSubmit = (e) => {
    if (e.keyCode === 13) {
      setEditMode(false);
    }
  };

  const viewStyle = {};
  const editStyle = {};

  if (editMode) {
    viewStyle.display = 'none';
  } else {
    editStyle.display = 'none';
  }

  return (
    <li
      className={`editing ${props.todo.completed ? 'completed' : ''}`}
      key={props.todo.id}
    >
      <div className="view">
        <input className="toggle" type="checkbox" onChange={handleCompleted} />
        <label onDoubleClick={enableEditMode} style={viewStyle}>
          {itemNewValue}
        </label>
        <button className="destroy" onClick={handleDelete}></button>
      </div>

      <input
        style={editStyle}
        className="edit"
        onKeyDown={handleUpdateSubmit}
        onChange={handleItemNewValue}
        type="text"
        value={itemNewValue}
        autoFocus
      />
    </li>
  );
};

export default TodoItem;
