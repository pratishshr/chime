import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Section.scss';

const ListSection = ({ children }) => (
  <div className={cn('col-8', styles.listSection)}>{children}</div>
);

ListSection.propTypes = {
  children: PropTypes.node
};

export default ListSection;
