import React from 'react';
import TodoList from './TodoList';
import PropTypes from 'prop-types';

class Todo extends React.Component {
   
    render(){
        return this.props.todo.map((todos) => (
            <TodoList key={todos.id} todos={todos} markComplete={this.props.markComplete} />
        ));
    }
}

//Prop types
Todo.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todo