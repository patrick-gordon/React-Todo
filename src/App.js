import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import Todoform from './components/TodoComponents/TodoForm'
const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todos: todoData,
    }
  }

  toggleCompleted = (id) => {
    console.log('toggleCompleted', id)
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
        return {...todo, completed: !todo.completed}
        } else {
          return todo;
        }
      })
    });
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
        <Todoform />
      </div>
    );
  }
}

export default App;
