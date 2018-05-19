import React from 'react';
import PropTypes from 'prop-types';

import TodoItem from './TodoItem';

const TodoList = ({ todos, remove }) => {
  // Map through the todos
  const todoNode = todos.map(todo => (
    <TodoItem todo={todo} key={todo.id} remove={remove} />
  ));
  return (<ul>{todoNode}</ul>);
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  remove: PropTypes.func.isRequired,
};

export default TodoList;
