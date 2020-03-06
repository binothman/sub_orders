import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';

const OrderStatuses = ({ handleOnSubmit }) => (
  <Form onSubmit={handleOnSubmit} />
);

OrderStatuses.propTypes = {
  handleOnSubmit: PropTypes.func,
};

export default OrderStatuses;
