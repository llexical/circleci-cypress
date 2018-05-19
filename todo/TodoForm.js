import React from 'react';

class TodoForm {
  ref(node) {
    this.input = node;
  }

  onClick() {
    const { input } = this;

    this.props.addTodo(input.value);
    input.value = '';
  }

  render() {
    return (
      <div>
        <input ref={this.ref} />
        <button onClick={this.onClick}>+</button>
      </div>
    );
  }
}

export default TodoForm;
