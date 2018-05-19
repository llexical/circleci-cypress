import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ todo, remove }) => (
  (<li onClick={remove(todo.id)}>{todo.text}</li>)
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};


export default TodoItem;
