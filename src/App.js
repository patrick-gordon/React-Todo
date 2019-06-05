// you will need a place to store your state in this component.
// design `App` to be the parent component of your application.
// this component is going to take care of state, and any change handlers you need to work with your state
import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import './app.css';

class App extends React.Component {
  state={
    todo: [
      {
        id: 1,
        task:'Complete daily assignment',
        completed: false
      },
      {
        id: 2,
        task:'Dinner with girlfriend',
        completed: false
      },
      {
        id: 3,
        task:'Walk the dog',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({todo: this.state.todo.map(todos => {
      if(todos.id === id) {
        todos.completed = !todos.completed
      }
      return todos;
    })})
  }
  render() {
    console.log(this.state.todo)
    return (
      <div className='App'>
        <div className='container'>
          <Todo todo={this.state.todo}  markComplete={this.markComplete} />
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
