import React from 'react';
import styled from 'styled-components';

import Page from '../core/layout/page';

const Title = styled('h1')`
  text-align: center
`;

const Index = () => (
  <Page>
    <main>
      <Title>CircleCI Cypress Demo</Title>
    </main>
  </Page>
);

export default Index;
