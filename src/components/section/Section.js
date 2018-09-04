import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.scss';

const Section = ({ children }) => <div className={styles.section}>{children}</div>;

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
