import React from "react";
import PropTypes from "prop-types";

import Form from "./Form";

const OrderStatuses = ({ handleOnSubmit, handleAddNewStatus, values }) => (
  <Form
    onSubmit={handleOnSubmit}
    handleAddNewStatus={handleAddNewStatus}
    results={values}
  />
);

OrderStatuses.propTypes = {
  handleOnSubmit: PropTypes.func,
  handleAddNewStatus: PropTypes.func
};

export default OrderStatuses;
