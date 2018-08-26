import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Section.scss';

const Section = ({ children }) => (
  <div className={cn('col', styles.section)}>
    <div className="row">{children}</div>
  </div>
);

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
