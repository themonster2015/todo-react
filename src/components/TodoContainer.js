import React, { Component } from 'react'
import TodosList from './TodosList';

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
    render() {
        return (
            <> 
            <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} />
            </>
        )
    }
}

