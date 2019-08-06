import React, { Component } from 'react'

export default class TodoForm extends Component {
    render() {
        return (
            <div>
                <form>
                    <input
                    type='text'
                    // value={this.state.item}
                    name='item'
                    onChange={this.handleChanges}
                    />
                    <button onClick={this.props.handleAddTodo}>ADD TODO</button>
                </form>
            </div>
        )
    }
}
