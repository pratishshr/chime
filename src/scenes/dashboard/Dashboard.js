import React from 'react';

import MainBody from 'components/main-body';
import Header from 'components/header';
import Player from 'components/player';
import Sidebar from 'components/sidebar';
import Container from 'components/container';
import SearchBar from 'components/search-bar';
import DashboardRouter from './DashboardRouter';

const Dashboard = () => (
  <Container>
    <Sidebar />
    <MainBody>
      <Header>
        <SearchBar />
      </Header>
      <DashboardRouter />
    </MainBody>
    <Player />
  </Container>
);

export default Dashboard;
