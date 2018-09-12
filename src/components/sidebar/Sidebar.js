// import cn from 'classnames';
import React, { Component } from 'react';

import styles from './Sidebar.scss';

import * as routes from 'constants/routes';

import LinkSection from './LinkSection';

const musicSection = {
  title: 'MUSIC',
  links: [
    {
      title: 'Discover',
      to: routes.DASHBOARD
    },
    {
      title: 'Search',
      to: routes.SEARCH
    }
  ]
};

const playListSection = {
  title: 'PLAYLISTS',
  links: [
    {
      title: 'New playlist',
      to: routes.DASHBOARD
    },
    {
      title: 'My songs',
      to: routes.DASHBOARD
    }
  ]
};

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <h1>CHIME</h1>
        <LinkSection section={musicSection} />
        <LinkSection section={playListSection} />
      </div>
    );
  }
}

export default Sidebar;
