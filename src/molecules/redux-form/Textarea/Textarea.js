import React from 'react';
import PropTypes from 'prop-types';
import { TextArea as SemTextArea, Form } from 'semantic-ui-react';

const Textarea = ({
  title,
  meta: { error, touched },
  style,
  disabled,
  handleOnChange,
  maxLength,
  input: { type, value, onBlur },
  ...props
}) => (
  <div className="form-textarea" style={style}>
    {title && <div className="form-textarea__label">{title}</div>}
    <Form>
      <SemTextArea
        disabled={disabled}
        {...props}
        onBlur={onBlur}
        onChange={handleOnChange}
        maxLength={maxLength}
        value={value}
        type={type}
      />
    </Form>
    {error && touched && <div className="form-textarea--error">{error}</div>}
  </div>
);

Textarea.propTypes = {
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

Textarea.defaultProps = {
  title: null,
};

export default Textarea;
