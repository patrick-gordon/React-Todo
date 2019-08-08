import React, { Component } from 'react'
import './Todo.css';

export default class Todo extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.todo)
        return (
            <div className={this.props.todo.completed ? 'completed' : ''}>
                {this.props.todo.task}
            </div>
        )
    }
}
