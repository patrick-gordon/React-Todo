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
        
    }
    render() {
        return (
            <form>
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
