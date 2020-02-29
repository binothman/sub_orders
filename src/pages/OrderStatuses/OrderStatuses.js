import React from 'react';
import PropTypes from 'prop-types';
import Widget from 'templates/Widget';

import Form from './Form';

const OrderStatuses = ({ handleOnSubmit }) => (
  <div>
    <Widget
      title="Order Statuses"
      icon="file alternate"
    >
      <Form onSubmit={handleOnSubmit} />
    </Widget>
  </div>
);

OrderStatuses.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
};

export default OrderStatuses;
