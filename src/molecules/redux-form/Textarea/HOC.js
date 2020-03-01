import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HOC = (WrappedComponent) => {
  class Textarea extends Component {
    handleOnChange = (e, data) => {
      const { type, input } = this.props;
      const value = type === 'number'
        ? data.value.replace(/[^0-9\\.]+/g, '')
        : data.value;

      input.onChange(value);
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

  Textarea.propTypes = {
    type: PropTypes.string,
    input: PropTypes.node,
  };

  return Textarea;
};

export default HOC;
