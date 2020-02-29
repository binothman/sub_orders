import React from 'react';
import PropTypes from 'prop-types';

const Align = ({ children }) => (
  <div className="aligned">
    {children}
  </div>
);

Align.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Align;
