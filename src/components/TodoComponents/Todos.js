import React, { Component } from 'react'
import PropTypes from 'prop-types'



export default class Todos extends Component {
    getStyle = () => {
        return{
            background: '#f4f4f4',
            borderBottom: '1px #ccc dotted',
            padding: '10px',
            textDecoration: this.props.todo.completed ? 
            'line-through' : 'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <h3>{this.props.todo.task}</h3>
            </div>
        )
    }
}

Todos.propTypes = {
    todo: PropTypes.object.isRequired
}



