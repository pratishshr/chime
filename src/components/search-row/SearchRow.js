import React from 'react';

import styles from './SearchRow.scss';

const SearchRow = () => (
  <div className={styles.searchRow}>
    <div className={styles.play}>
      <i className="fas fa-play-circle" />
    </div>
    <div className={styles.searchContent}>
      <div className={styles.thumbnail}>
        <img alt="thumbnail" src="https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png" />
        <span className={styles.title}>Feel Good Inc</span>
      </div>
      <div className={styles.artist}>Demon Days</div>
      <div className={styles.album}>Album name</div>
      <div className={styles.time}>3:43</div>
      <div className={styles.options}>
        <i className="fas fa-ellipsis-h" />
      </div>
    </div>
  </div>
);

export default SearchRow;
