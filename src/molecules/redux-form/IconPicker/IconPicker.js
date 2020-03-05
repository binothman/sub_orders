import React from 'react';
import PropTypes from 'prop-types';
import { IconPicker } from 'atoms';

const IconPickerField = ({ input: { value, onChange } }) => (
  <IconPicker
    onChange={(icon) => onChange(icon)}
    value={value}
  />
);

IconPickerField.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func,
  }),
};

export default IconPickerField;
