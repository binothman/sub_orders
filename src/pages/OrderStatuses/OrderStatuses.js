import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'redux-form';

// Components
import { Button } from 'atoms';
import Widget from 'templates/Widget';

// related components
import Statuses from './Statuses';

const OrderStatuses = ({ handleAddNewStatus, values, handleSave }) => (
  <>
    <Widget
      title="Order Statuses"
      icon="file alternate"
    >
      <FieldArray
        name="statuses"
        component={Statuses}
        handleAddNewStatus={handleAddNewStatus}
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
      onClick={handleSave}
      style={{
        marginTop: '10px',
        borderRadius: '20px',
      }}
    />
  </>
);

OrderStatuses.propTypes = {
  handleAddNewStatus: PropTypes.func,
  values: PropTypes.shape(),
  handleSave: PropTypes.func,
};

export default OrderStatuses;
