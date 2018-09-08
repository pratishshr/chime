import React from 'react';

import styles from './SearchRow.scss';

const SearchRow = () => (
  <div className={styles.searchRow}>
    <span />
    {/* playicon */}
    <span />
    {/* image and title */}
    <span />
    {/* artist */}
    <span />
    {/* album */}
    <span />
    {/* moreicon */}
    <div className={styles.thumbnail}>
      <img alt="thumbnail" src="https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png" />
    </div>
    <div className={styles.info}>
      <div className={styles.title}>Feel Good Inc</div>
      <div className={styles.channel}>Demon Days</div>
    </div>
    <div className={styles.time}>3:43</div>
    <div className={styles.options}>
      <i className="fas fa-plus" />
    </div>
  </div>
);

export default SearchRow;
