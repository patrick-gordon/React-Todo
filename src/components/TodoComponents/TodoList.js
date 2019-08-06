// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { Component } from 'react'
import Todos from './Todos';
import PropTypes from 'prop-types'

export class TodoList extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <Todos
                key={todo.id}
                todo={todo} 
                />
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList
