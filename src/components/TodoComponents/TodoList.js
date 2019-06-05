// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import PropTypes from 'prop-types'


export class TodoList extends React.Component {
    getStyle = () => {
           return{
            background: '#f4f4f4',
            textDecoration: this.props.todos.completed ? 'line-through' : 'none'
           }
       }

    
    
    render(){
        return(
            <div style={this.getStyle()}>
            <p>
                <input type='checkbox' onChange={this.props.markComplete} /> {' '}
                {this.props.todos.task}
            </p>
            </div>
        )
    }
}

//Prop types
TodoList.propTypes = {
    todos: PropTypes.array.isRequired
}

export default TodoList