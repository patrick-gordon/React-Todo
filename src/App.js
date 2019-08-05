import React, {Component} from 'react';
import Todos from './components/TodoComponents/Todos'

class App extends Component {
 state= {
  todos: [
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    console.log(this.state.todos)
    return (
      <div>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
