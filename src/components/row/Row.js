import React from 'react';
import cn from 'classnames';

import styles from './Row.scss';

const Row = () => (
  <div className={cn('row', styles.row)}>
    <div className={styles.thumbnail}>
      <img
        alt="thumbnail"
        src="https://scontent.fktm3-1.fna.fbcdn.net/v/t1.0-9/38138750_10204754062968162_8269942632046657536_n.jpg?_nc_cat=0&oh=d86b2eb446aeda6fec4339d781bab107&oe=5C076B8F"
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
