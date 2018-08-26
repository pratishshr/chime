// import cn from 'classnames';
import React, { Component } from 'react';

import styles from './Sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>MUSIC</div>
          <div className={styles.sectionBody}>
            <div className={styles.sectionLink}>
              <a href="blank" className={styles.link}>
                Discover
              </a>
            </div>
            <div className={styles.sectionLink}>
              <a href="blank" className={styles.link}>
                Search
              </a>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>PLAYLISTS</div>
          <div className={styles.sectionBody}>
            <div className={styles.sectionLink}>
              <a href="blank">New playlist</a>
            </div>
            <div className={styles.sectionLink}>
              <a href="blank">Upbeat songs</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
