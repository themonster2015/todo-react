import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

export default function TodoItem(props) {
  const [editing, setEditing] = useState(false);
  const handleEditing = () => {
    setEditing(true);
  };
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };
  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  // eslint-disable-next-line react/destructuring-assignment
  const { completed, id, title } = props.todo;

  return (
    <li className={styles.item}>
      <div onDoubleClick={completed ? null : handleEditing} style={viewMode}>
        <input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} className={styles.checkbox} />
        <button type="button" onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: 'orangered', fontSize: '16px' }} />
        </button>
        {' '}
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </div>
      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={(e) => props.setUpdate(e.target.value, id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
}
