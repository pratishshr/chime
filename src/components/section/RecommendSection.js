import React from 'react';
import PropTypes from 'prop-types';

const RecommentSection = ({ children }) => (
  <div className="col-4">{children}</div>
);

RecommentSection.propTypes = {
  children: PropTypes.node
};

export default RecommentSection;
