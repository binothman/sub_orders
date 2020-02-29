import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'semantic-ui-react';

const Toggle = ({ style }) => (
  <div className="form-toggle" style={style}>
    <Radio toggle />
  </div>
);

Toggle.propTypes = {
  style: PropTypes.node,
};
export default Toggle;
