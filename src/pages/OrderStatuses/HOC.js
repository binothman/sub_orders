import React from 'react';

const HOC = (WrappedComponent) => {
  class OrderStatuses extends React.Component {
    componentDidUpdate() {
      console.log('test');
    }

    render() {
      return (
        <WrappedComponent
          dhsja="dasjdhajsd"
          {...this.props}
        />
      );
    }
  }

  return OrderStatuses;
};

export default HOC;
