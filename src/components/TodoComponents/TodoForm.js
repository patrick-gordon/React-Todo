import React, { Component } from 'react';

export class TodoForm extends Component {
state= {
    task: ''
}

onChange = (e) => this.setState({task: e.target.value});


    render(){
        return (
           <form style={{ display: 'flex'}}>
               <input
                    type='text'
                    name='task'
                    style={{ flex: '10', padding: '5px' }}
                    placeholder='Add Todo ...'
                    value={this.state.task}
                    onChange={this.onChange}
                />
               <input
                    type='submit'
                    value='Submit'
                    className='btn'
                    style={{flex:'1'}}
                />
            </form>
        )
    }
}

export default TodoForm