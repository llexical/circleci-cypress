import React from 'react';
import styled from 'styled-components';

import Page from '../layouts/page';
import TodoApp from '../todoApp';

const Title = styled('h1')`
  text-align: center
`;

const Main = styled('main')`
  text-align: center;
`;

const Index = () => (
  <Page>
    <Main>
      <Title>CircleCI Cypress Demo</Title>
      <TodoApp />
    </Main>
  </Page>
);

export default Index;
