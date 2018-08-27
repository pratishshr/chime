import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './Header.scss';

const Header = ({ children }) => (
  <div className={cn('row', styles.header)}>{children}</div>
);

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
