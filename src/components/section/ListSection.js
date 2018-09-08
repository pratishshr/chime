import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.scss';

const ListSection = ({ children }) => <div className={styles.listSection}>{children}</div>;

ListSection.propTypes = {
  children: PropTypes.node
};

export default ListSection;
