import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Container.scss';

const Container = ({ children }) => (
  <div className={cn('container-fluid', styles.container)}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.node
};
export default Container;
