import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.scss';

const QueueSection = ({ children }) => (
  <div className={styles.QueueSection}>
    <h1>What&apos;s Next</h1>
    <div className={styles.listSection}>{children}</div>
  </div>
);

QueueSection.propTypes = {
  children: PropTypes.node
};

export default QueueSection;
