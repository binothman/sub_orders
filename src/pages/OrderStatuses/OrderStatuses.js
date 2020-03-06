import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const OrderStatuses = ({
  handleOnSubmit,
  handleAddNewStatus,
}) => (
  <Form
    onSubmit={handleOnSubmit}
    handleAddNewStatus={handleAddNewStatus}
  />
);

OrderStatuses.propTypes = {
  handleOnSubmit: PropTypes.func,
  handleAddNewStatus: PropTypes.func,
};

export default OrderStatuses;
