import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        task: 'Complete daily assignment',
        completed: false
      },
      {
        id: 2,
        task: 'Dinner with girlfriend',
        completed: true
      },
      {
        id: 3,
        task: 'Walk the dog',
        completed: false
      }
    ],
    todo: ''
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todos, completed: false, id: Date.now() };
    this.setState({
      todos: [...this.state.todos, newTodo],
      todo: ''
    })
  }



  render() {
    console.log(this.state.todos)
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm
          value={this.state.todo}
          handleTodoChange={this.changeTodo}
          handleAddTodo={this.addTodo}
          handleClearTodos={this.clearCompletedTodos}
        />
      </div>
    );
  }
}

export default App;
