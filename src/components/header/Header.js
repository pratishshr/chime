import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.scss';

const Header = ({ title }) => <h1 className={styles.title}>{title}</h1>;

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
