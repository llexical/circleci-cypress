import React from 'react';
import styled from 'styled-components';

import TodoApp from '../app/todoApp';

const Main = styled('main')`
  font: 16px Helvetica;
  text-align: center;
`;

const Title = styled('h1')`
  text-align: center
`;

const Index = () => (
  <Main>
    <Title>CircleCI Cypress Demo</Title>
    <TodoApp />
  </Main>
);

export default Index;
