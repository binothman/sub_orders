import React from 'react';
import PropTypes from 'prop-types';

const SubStatus = ({ children }) => (
  <div className="sub-status">
    {children}
  </div>
);

SubStatus.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default SubStatus;
