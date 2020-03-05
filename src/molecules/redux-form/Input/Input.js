import React from 'react';
import PropTypes from 'prop-types';
import { Input as SemInput } from 'semantic-ui-react';

const Input = ({
  title,
  meta: { error, touched },
  style,
  disabled,
  handleOnChange,
  maxLength,
  input: { type, value, onBlur },
  ...props
}) => (
  <div className="form-input" style={style}>
    {title && <div className="form-input__label">{title}</div>}
    <SemInput
      disabled={disabled}
      fluid
      error={!!(touched && error)}
      {...props}
      onBlur={onBlur}
      onChange={handleOnChange}
      maxLength={maxLength}
      value={value}
      type={type}
    />
    {error && touched && <div className="form-input--error">{error}</div>}
  </div>
);

Input.propTypes = {
  title: PropTypes.string,
  meta: PropTypes.shape({
    error: PropTypes.string,
    touched: PropTypes.bool,
  }),
  style: PropTypes.node,
  disabled: PropTypes.bool,
  handleOnChange: PropTypes.func,
  maxLength: PropTypes.number,
  input: PropTypes.shape({
    type: PropTypes.string,
    value: PropTypes.string,
    onBlur: PropTypes.func,
  }),
};

Input.defaultProps = {
  title: null,
};

export default Input;
