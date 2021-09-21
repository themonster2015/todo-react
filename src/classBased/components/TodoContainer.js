/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import InputTodo from './InputTodo';
import Header from './Header';

export default class TodoContainer extends Component {
    state = {
      todos: [],
    };

    componentDidMount() {
      const temp = localStorage.getItem('todos');
      const loadedTodos = JSON.parse(temp);
      if (loadedTodos) {
        this.setState({
          todos: loadedTodos,
        });
      } else {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
          .then((res) => res.json())
          .then((data) => this.setState({ todos: data }));
      }
    }

    componentDidUpdate(prevProps, prevState) {
      if (prevState.todos !== this.state.todos) {
        const temp = JSON.stringify(this.state.todos);
        localStorage.setItem('todos', temp);
      }
    }

    componentWillUnmount() {
      console.log('Cleaning up...');
    }

       handleChange = (id) => {
         this.setState((prevState) => ({
           todos: prevState.todos.map((todo) => {
             if (todo.id === id) {
               return {
                 ...todo, completed: !todo.completed,
               };
             }
             return todo;
           }),
         }));
       }

       delTodo = (id) => {
         this.setState({
           todos: [
             ...this.state.todos.filter((todo) => todo.id !== id),
           ],
         });
       }

       addTodoItem = (item) => {
         const newTodo = {
           id: uuidv4(),
           title: item,
           completed: false,
         };
         this.setState({
           todos: [...this.state.todos, newTodo],
         });
       }

       setUpdate = (updatedTitle, id) => {
         this.setState({
           todos: this.state.todos.map((todo) => {
             if (todo.id === id) {
               // eslint-disable-next-line no-param-reassign
               todo.title = updatedTitle;
             }
             return todo;
           }),
         });
       }

       render() {
         return (
           <div className="container">
             <div className="inner">
               <Header />
               <InputTodo addTodoProps={this.addTodoItem} />
               <TodosList
                 todos={this.state.todos}
                 handleChangeProps={this.handleChange}
                 deleteTodoProps={this.delTodo}
                 setUpdate={this.setUpdate}
               />
             </div>
           </div>
         );
       }
}
