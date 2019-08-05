import React, { Component } from 'react'
import TodoList from './TodoList'
import PropTypes from 'prop-types';

export default class Todos extends Component {
    render() {
        return this.props.todos.map((todo) => (
            <TodoList key={todo.id} todo={todo}/>
        ));
    }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
}