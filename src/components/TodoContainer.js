import React, { Component } from 'react'
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';
import {v4 as uuidv4} from 'uuid'

export default class TodoContainer extends Component {
    state = {
        todos: [
          {
            id: 1,
            title: "Setup development environment",
            completed: true
          },
          {
            id: 2,
            title: "Develop website and add content",
            completed: false
          },
          {
            id: 3,
            title: "Deploy to live server",
            completed: false
          }
        ]
       };

       handleChange = (id) => {
           this.setState(prevState => ({
               todos: prevState.todos.map(todo => 
                {
                    if(todo.id === id){
                        return {
                            ...todo, completed: !todo.completed
                        }
                    }
                    return todo
                })
           }))
       }

       delTodo = (id) => {
           this.setState({
               todos: [
                   ...this.state.todos.filter(todo =>
                    todo.id !== id)
               ]
           })
       }

       addTodoItem = item => {
           const newTodo = {
               id: uuidv4(),
               title: item,
                completed: false
           }
           this.setState({
               todos: [...this.state.todos, newTodo]
           })
       }
    render() {
        return (
            <div className="container"> 
            <div className="inner">
            <Header />
            <InputTodo addTodoProps={this.addTodoItem} />
            <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
            </div>
            </div>
        )
    }
}

