/*
  Statuses Component
  -- use this Component in FieldArray only
  -- for display Order Statuses
*/
import React from 'react';
import { OrderStatus } from 'templates';
import { FieldArray } from 'redux-form';


const Statuses = ({ fields, handleAddNewStatus }) => (
  fields.map((field, index) => {

    // pick field values
    const status = fields.get(index);

    return (
      <OrderStatus
        key={index}
        index={index}
        field={field}
        title={status.title}
        sub_statuses={status.sub_statuses}
        addNewStatus={handleAddNewStatus}
      >
        {status.sub_statuses && (
          <FieldArray
            name={`${field}.sub_statuses`}
            component={Statuses}
            isSubStatus
          />
        )}
      </OrderStatus>
    );
  })
);

Statuses.defaultProps = {
  isSubStatus: false,
};

export default Statuses;
