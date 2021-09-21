/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import styles from './TodoItem.module.css';

export default class TodoItem extends Component {
    // eslint-disable-next-line react/state-in-constructor
    state = {
      editing: false,
    }

    handleEditing = () => {
      this.setState({
        editing: true,
      });
    }

    handleUpdateDone = (e) => {
      if (e.key === 'Enter') {
        this.setState({
          editing: false,
        });
      }
    }

    render() {
      const viewMode = {};
      const editMode = {};

      if (this.state.editing) {
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
      const { completed, id, title } = this.props.todo;
      return (
        <li className={styles.item}>
          <div onDoubleClick={this.handleEditing} style={viewMode}>
            <input type="checkbox" checked={completed} onChange={() => this.props.handleChangeProps(id)} className={styles.checkbox} />
            {' '}
            <button type="button" onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
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
            onChange={(e) => this.props.setUpdate(e.target.value, id)}
            onKeyDown={this.handleUpdateDone}
          />
        </li>
      );
    }
}
