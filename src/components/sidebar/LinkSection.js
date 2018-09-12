import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './Sidebar.scss';

const LinkSection = ({ section }) => {
  return (
    <div className={styles.section}>
      <div className={styles.sectionTitle}>{section.title}</div>
      <ul className={styles.sectionBody}>
        {section.links.map((link, index) => (
          <li key={index} className={styles.sectionLink}>
            <Link to={link.to} className={styles.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

LinkSection.propTypes = {
  section: PropTypes.shape({
    title: PropTypes.string,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        to: PropTypes.string
      })
    )
  })
};

export default LinkSection;
