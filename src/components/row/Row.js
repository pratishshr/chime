import React from 'react';
import cn from 'classnames';

import styles from './Row.scss';

const Row = () => (
  <div className={cn('row', styles.row)}>
    <div className={styles.thumbnail}>
      <img
        alt="thumbnail"
        src="https://upload.wikimedia.org/wikipedia/en/a/ad/X_cover.png"
      />
    </div>
    <div className={cn('col', styles.info)}>
      <div className={styles.title}>Feel Good Inc</div>
      <div className={styles.channel}>Demon Days</div>
    </div>
    <div className={styles.time}>3:43</div>
    <div className={styles.options}>
      <i className="fas fa-plus" />
    </div>
  </div>
);

export default Row;
