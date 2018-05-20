import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled('li')`
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
}
`;

const TodoItem = ({ todo, remove }) => (
  (<Item onClick={() => remove(todo.id)}>{todo.text}</Item>)
);

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  remove: PropTypes.func.isRequired,
};


export default TodoItem;
