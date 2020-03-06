/*
  HOCReduxForm
  -- use this HOC to inject some additional props
      to reduxForm HOC
*/
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm, getFormValues, getFormSyncErrors } from 'redux-form';
import { connect } from 'react-redux';

const HOCReduxForm = (config) => (WrappedComponent) => {
  const formID = config.form || WrappedComponent.name;

  class ReduxForm extends Component {

    getFieldValue = (fieldName) => {
      const { fieldValues } = this.props;

      if (!fieldValues) return false;

      if (fieldValues[fieldName]) {
        return fieldValues[fieldName];
      }
      return false;
    }


    render() {
      return (
        <WrappedComponent
          {...this.props}
          getFieldValue={this.getFieldValue}
        />
      );
    }
  }

  ReduxForm.propTypes = {
    fieldValues: PropTypes.arrayOf(Object),
  };

  const reduxFormConfig = {
    form: formID,
    enableReinitialize: true,
    ...config,
  };

  const mapStateToProps = (state) => ({
    formValues: getFormValues(formID)(state) || {},
    errors: getFormSyncErrors(formID)(state) || {},
  });

  return connect(mapStateToProps)(
    reduxForm(reduxFormConfig)(ReduxForm),
  );
};
export default HOCReduxForm;
