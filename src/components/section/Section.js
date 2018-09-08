import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Section.scss';

const Section = ({ children }) => <div className={cn('clearfix', styles.section)}>{children}</div>;

Section.propTypes = {
  children: PropTypes.node
};

export default Section;
