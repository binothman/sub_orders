import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HOC = (WrappedComponent) => {
  class Input extends Component {
    handleOnChange = (e, data) => {
      const { type, input: { onChange } } = this.props;
      const value = type === 'number'
        ? data.value.replace(/[^0-9\\.]+/g, '')
        : data.value;

      onChange(value);
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          handleOnChange={this.handleOnChange}
        />
      );
    }
  }

  Input.propTypes = {
    type: PropTypes.string,
    input: PropTypes.shape({
      onChange: PropTypes.func,
    }),
  };

  return Input;
};

export default HOC;
