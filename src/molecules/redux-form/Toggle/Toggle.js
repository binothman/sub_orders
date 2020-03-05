import React from 'react';
import PropTypes from 'prop-types';
import { Radio } from 'semantic-ui-react';

const Toggle = ({ style, input: { value, onChange } }) => (
  <div className="form-toggle" style={style}>
    <Radio
      toggle
      checked={value ? !!(value) : false}
      onChange={() => onChange(!value)}
    />
  </div>
);

Toggle.propTypes = {
  style: PropTypes.node,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
    onChange: PropTypes.func,
  }),
};

export default Toggle;
