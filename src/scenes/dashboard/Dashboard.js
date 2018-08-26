import React from 'react';

import Row from 'components/row';
import Sidebar from 'components/sidebar';
import Container from 'components/container';
import Section, { ListSection, RecommendSection } from 'components/section';

const Dashboard = () => (
  <Container>
    <div className="row">
      <Sidebar />
      <Section>
        <ListSection>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </ListSection>
        <RecommendSection>Recommendation</RecommendSection>
      </Section>
    </div>
  </Container>
);

export default Dashboard;
