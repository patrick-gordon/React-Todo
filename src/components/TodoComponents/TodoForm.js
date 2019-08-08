import React, { Component } from 'react'

export default class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            newtodo: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newtodo);
        this.setState({ newtodo: ''});

    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' 
                        name='newtodo' 
                        placeholder='Add a new Todo' 
                        value={this.state.newtodo}
                        onChange={this.handleChange}
                />
                <button type='submit'>Add a new Todo</button>
            </form>
        )
    }
}
