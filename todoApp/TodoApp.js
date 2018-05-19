import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);
    this.incrementId = 0;
    // Set initial state
    this.state = {
      data: [],
    };

    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  // Add todo handler
  addTodo(val) {
    // Assemble data
    const todo = { text: val, id: this.incrementId };
    // Update state
    this.setState({ data: [...this.state.data, todo] });
    this.incrementId += 1;
  }
  // Handle remove
  handleRemove(id) {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter(todo => todo.id !== id);
    // Update state with filter
    this.setState({ data: remainder });
  }

  render() {
    console.log(this.state.data);
    // Render JSX
    return (
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;
