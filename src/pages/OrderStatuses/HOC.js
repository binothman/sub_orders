import React from 'react';
import PropTypes from 'prop-types';

const HOC = (WrappedComponent) => {
  class OrderStatuses extends React.Component {
    state = { values: null }

    // handle on Click on Save Btn
    handleSave = () => {
      const { formValues } = this.props;
      this.setState({ values: formValues });
    }


    // handle on click on Add New Status Btn
    handleAddNewStatus = (field, sub_statuses) => {
      const { change } = this.props;
      const value = sub_statuses || [];
      change(`${field}.sub_statuses`, [...value, {}]);
    }

    render() {
      const { values } = this.state;

      return (
        <WrappedComponent
          values={values}
          handleSave={this.handleSave}
          handleAddNewStatus={this.handleAddNewStatus}
          {...this.props}
        />
      );
    }
  }

  OrderStatuses.propTypes = {
    change: PropTypes.func,
    formValues: PropTypes.shape(),
  };

  return OrderStatuses;
};

export default HOC;
