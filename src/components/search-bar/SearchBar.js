import React from 'react';

import styles from './SearchBar.scss';

const SearchBar = () => (
  <div className={styles.searchBar}>
    <input type="text" placeholder="Search" className={styles.searchField} />
  </div>
);

export default SearchBar;
