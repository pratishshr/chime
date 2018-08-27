import React from 'react';
import cn from 'classnames';

import styles from './SearchBar.scss';

const SearchBar = () => (
  <div className={cn('col', styles.searchBar)}>
    <input
      type="text"
      placeholder="&#xf002; Search"
      className={styles.searchField}
    />
  </div>
);

export default SearchBar;
