import React from 'react';

import cn from 'classnames';

import styles from './Queue.scss';

const Queue = () => (
  <div className={cn('clearfix', styles.queue)}>
    <span className={styles.queueImg} />
    <div className={styles.queueInfo}>
      <h2 className={styles.queueTitle}>Charlie Puth-Attention</h2>
      <span className={styles.queueAuthor}>Charlie Puth</span>
      <span className={styles.queueTime}>3min 52sec</span>
    </div>
  </div>
);

export default Queue;
