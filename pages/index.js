import React from 'react';
import styled from 'styled-components';

import Page from '../layouts/page';
import TodoApp from '../todoApp';

const Title = styled('h1')`
  text-align: center
`;

const Index = () => (
  <Page>
    <main>
      <Title>CircleCI Cypress Demo</Title>
      <TodoApp />
    </main>
  </Page>
);

export default Index;
