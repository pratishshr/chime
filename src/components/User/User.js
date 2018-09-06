import React from 'react';

import styles from './User.scss';

const User = ({ User }) => {
  return (
    <div className={styles.User}>
      <span className={styles.userimg} />
      <span className={styles.userinfo}>Pratish Shrestha</span>
    </div>
  );
};

export default User;
