import React, { Component } from 'react'

export default class InputTodo extends Component {
    state={
        title: ""
    }
    onChange = (e) => {
        this.setState({
            title : e.target.value
        })
    }
    render() {
        return (
           <form>
               <input type="text " placeholder="Enter todo..." value={this.state.title} onChange={this.onChange} />
               <button type="submit">Add</button>
           </form>
        )
    }
}
