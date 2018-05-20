import React from 'react';
import PropTypes from 'prop-types';

import { Button, TextInput } from '../core/form';
import TodoFormWrapper from './TodoFormWrapper';

class TodoForm extends React.Component {
  constructor(props) {
    // Pass props to parent class
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.ref = this.ref.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const { input } = this;

    this.props.addTodo(input.value);
    input.value = '';
  }

  ref(node) {
    this.input = node;
  }

  render() {
    return (
      <TodoFormWrapper>
        <form onSubmit={this.onSubmit}>
          <TextInput innerRef={this.ref} />
          <Button type="submit">+</Button>
        </form>
      </TodoFormWrapper>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
