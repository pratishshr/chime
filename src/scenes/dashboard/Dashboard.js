import React from 'react';

import Row from 'components/row';
import Header from 'components/header';
import Sidebar from 'components/sidebar';
import Container from 'components/container';
import SearchBar from 'components/search-bar';
import Section, { ListSection, RecommendSection } from 'components/section';

const Dashboard = () => (
  <Container>
    <Sidebar />
    <Header>
      <SearchBar />
    </Header>
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
  </Container>
);

export default Dashboard;
