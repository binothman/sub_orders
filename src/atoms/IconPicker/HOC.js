import React from 'react';
import PropTypes from 'prop-types';

// Dummy Icons List
import { icons } from './icons.json';

const HOC = (WrappedComponent) => {
  class IconPicker extends React.Component {
    state = { value: 'group' }

    /*
      sync @value from props to state
      ** this using for make the user accebilty to pass the value
         and ignore state value
    */
    static getDerivedStateFromProps(props) {
      if (props.value) {
        return {
          value: props.value,
        };
      }
      return null;
    }

    /* run on icon clicked, take the selected icon
      and put the value to the state
    */
    handleValue = (value) => {
      const { onChange } = this.props;
      this.setState({ value });
      onChange(value);
      document.body.click();
    }


    render() {
      const { value } = this.state;

      return (
        <WrappedComponent
          {...this.props}
          icons={icons}
          value={value}
          handleValue={this.handleValue}
        />
      );
    }
  }

  IconPicker.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.string,
  };

  return IconPicker;
};

export default HOC;
