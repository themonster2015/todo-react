

import React, {useState} from 'react'
import styles from './TodoItem.module.css'

export default function TodoItem(props) {
    const [editing, setEditing] = useState(false)
    const handleEditing = () => {
        setEditing(true)
    }
    const handleUpdateDone = (e) => {
       if(e.key === "Enter"){
           setEditing(false)
       }
    }
    let viewMode = {}
    let editMode ={}

        if(editing){
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
          const { completed, id, title } = props.todo
   
    return (
        <li className={styles.item}>
        <div onDoubleClick={handleEditing} style={viewMode}><input type="checkbox" checked={completed} onChange={() => props.handleChangeProps(id)} className={styles.checkbox} />
         <button onClick={() => props.deleteTodoProps(id)}>Delete</button>  <span style={completed ? completedStyle : null}>
    {title}
  </span>
  </div>
  <input type="text" className={styles.textInput} 
  style={editMode} value={title} 
  onChange={(e) =>props.setUpdate(e.target.value, id)}
  onKeyDown={handleUpdateDone} />
</li>
    )
}
