import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';
import HOCReduxForm from 'atoms/HOCReduxForm';

// Components
import { Button } from 'atoms';
import Widget from 'templates/Widget';

// related components
import Statuses from './Statuses';

// dummy data
import { statuses } from './dummy.json';

const Form = ({
  handleAddNewStatus,
  values,
  handleSubmit,
  submitFailed,
}) => (
  <>
    <Widget
      title="Order Statuses"
      icon="file alternate"
    >
      <FieldArray
        name="statuses"
        component={Statuses}
        handleAddNewStatus={handleAddNewStatus}
        submited={submitFailed}
      />
    </Widget>

    {/*
      this for showing only, to display form values
      after click on Save
    */}
    {values && (
      <pre style={{ padding: '10px', background: '#cfe5f5' }}>
        {JSON.stringify(values, undefined, 2)}
      </pre>
    )}

    <Button
      fluid
      content="Save"
      onClick={handleSubmit}
      style={{
        marginTop: '10px',
        borderRadius: '20px',
      }}
    />
  </>
);

Form.propTypes = {
  handleAddNewStatus: PropTypes.func,
  values: PropTypes.shape(),
  handleSubmit: PropTypes.func,
  submitFailed: PropTypes.bool,
};

const formConfig = {
  form: 'order_statuses',
  initialValues: { statuses },
};

export default HOCReduxForm(formConfig)(Form);
