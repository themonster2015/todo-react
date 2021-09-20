import React from 'react'
import styles from './TodoItem.module.css'

export default function TodoItem(props) {

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      }
      const { completed, id, title } = props.todo

    return (
       <li className={styles.item}><input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} className={styles.checkbox} /> <button onClick={() => props.deleteTodoProps(id)}>Delete</button>  <span style={completed ? completedStyle : null}>
       {title}
     </span></li>
    )
}
