
import React,{useState} from 'react'
import {FaPlusCircle} from 'react-icons/fa'

const InputTodo = (props) => {
    const [title,setTitle] = useState('')

   const onChange = (e) => {
        setTitle(e.target.value) 
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(title.trim()){
            props.addTodoProps(title)
           setTitle('')
        } else {
            alert("Please write item")
        }
       
    }
    return (
        <form onSubmit={handleSubmit} className="form-container">
        <input type="text " placeholder="Enter todo..." value={title} onChange={onChange} />
        <button type="submit" className="input-submit"><FaPlusCircle /></button>
    </form>
    )
}

export default InputTodo