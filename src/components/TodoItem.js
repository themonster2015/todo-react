import React from 'react'

export default function TodoItem(props) {
    return (
       <li><input type="checkbox" checked={props.todo.completed} onChange={() => props.handleChangeProps(props.todo.id)} /> {props.todo.title}</li>
    )
}