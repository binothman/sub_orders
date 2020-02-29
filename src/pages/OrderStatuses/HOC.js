import React from 'react';

const HOC = (WrappedComponent) => {
  class OrderStatuses extends React.Component {
    componentDidUpdate() {
      console.log('test');
    }

    handleOnSubmit = (values) => {
      console.log(values);
    }

    render() {
      return (
        <WrappedComponent
          handleOnSubmit={this.handleOnSubmit}
          {...this.props}
        />
      );
    }
  }

  return OrderStatuses;
};

export default HOC;
