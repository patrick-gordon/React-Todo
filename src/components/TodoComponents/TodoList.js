// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'

export class TodoList extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.todo.task}</h3>
            </div>
        )
    }
}

export default TodoList
