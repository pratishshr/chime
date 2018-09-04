import React from 'react';

import styles from './SearchBar.scss';

const SearchBar = () => (
  <div className={styles.searchBar}>
    <input type="text" placeholder="&#xf002; Search" className={styles.searchField} />
  </div>
);

export default SearchBar;
