import React from 'react';
import PropTypes from 'prop-types';

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
      <form onSubmit={this.onSubmit}>
        <input ref={this.ref} />
        <button type="submit">+</button>
      </form>
    );
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default TodoForm;
