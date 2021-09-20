import React, {useState, useEffect} from 'react'
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import {v4 as uuidv4} from 'uuid'

export default function TodoContainer() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const temp = localStorage.getItem("todos")
        const loadedTodos = JSON.parse(temp)
        if(loadedTodos){
            setTodos(
                 loadedTodos
            )
        } else {
            fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(res => res.json())
            .then(data => setTodos( data)
            
            )
        }

    }, [])

    useEffect(() => {
            const  temp = JSON.stringify(todos)
            localStorage.setItem("todos", temp)
    
       
    }, [todos])
   

  const  handleChange = (id) => {
        setTodos(prevTodos =>   
            prevTodos.map(todo => 
             {
                 if(todo.id === id){
                     return {
                         ...todo, completed: !todo.completed
                     }
                 }
                 return todo
             })
        )
    }

   const delTodo = (id) => {
        setTodos(
            [
                ...todos.filter(todo =>
                 todo.id !== id)
            ]
        )
    }

   const addTodoItem = item => {
        const newTodo = {
            id: uuidv4(),
            title: item,
             completed: false
        }
        setTodos(
             [...todos, newTodo]
        )
    }

    const setUpdate = (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        )
   }

    return (
        <div className="container"> 
            <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList todos={todos} handleChangeProps={handleChange} deleteTodoProps={delTodo} setUpdate={setUpdate} />
            </div>
            </div>
    )
}

