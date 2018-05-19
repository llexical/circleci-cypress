import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodoItem from './TodoItem';

const List = styled('ul')`
  padding: 0;
  text-align: left;
  list-style: none;
  margin: 0;
`;

const TodoList = ({ todos, remove }) => (
  <List>
    {todos.map(todo => (
      <TodoItem todo={todo} key={todo.id} remove={remove} />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
  remove: PropTypes.func.isRequired,
};

export default TodoList;
