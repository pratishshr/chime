import React from 'react';

import styles from './User.scss';

const User = ({ user }) => {
  return (
    <div className={styles.user}>
      <span className={styles.userImg} />
      <span className={styles.userInfo}>Pratish Shrestha</span>
    </div>
  );
};

export default User;
