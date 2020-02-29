import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

const Widget = ({ children, title, icon }) => (
  <div className="widget">
    <div className="widget__title">
      {icon && <Icon disabled name={icon} size="large" color="black" />}
      {title}
    </div>
    <div className="widget__content">
      {children}
    </div>
  </div>
);

Widget.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default Widget;
