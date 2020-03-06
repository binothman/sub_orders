/*
  Statuses Component
  -- use this Component in FieldArray only
  -- for display Order Statuses
*/
import React from 'react';
import { OrderStatus } from 'templates';
import { FieldArray } from 'redux-form';

import { errMessages } from './validations';

const Statuses = ({ fields, handleAddNewStatus, submited }) => (
  fields.map((field, index) => {
    // pick field values
    const status = fields.get(index);

    // shared props between Main & Sub components
    const props = {
      submited,
      status,
      errMessages,
    };

    return (
      <OrderStatus
        key={index}
        index={index}
        field={field}
        title={status.title}
        sub_statuses={status.sub_statuses}
        addNewStatus={handleAddNewStatus}
        {...props}
      >
        {status.sub_statuses && (
          <FieldArray
            name={`${field}.sub_statuses`}
            component={Statuses}
            isSubStatus
            {...props}
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
