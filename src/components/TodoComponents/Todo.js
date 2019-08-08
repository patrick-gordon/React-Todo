import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.todo)
        return (
            <div onClick={() => this.props.toggleCompleted(this.props.todo.id)}
                className={this.props.todo.completed ? 'completed' : ''}>
                {this.props.todo.task}
            </div>
        )
    }
}
