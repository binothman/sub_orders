import React from 'react';
import { reduxForm } from 'redux-form';
import { OrderStatus } from 'templates';
import { Icon } from 'semantic-ui-react';
import { Button } from 'atoms';

const Form = () => (
  <div>
    <OrderStatus title="Preparing">
      <OrderStatus title="Packaging" />
      <OrderStatus title="Ready For Shipping" />
      <Button icon labelPosition="left">
        <Icon name="plus" />
        New Status
      </Button>
    </OrderStatus>

    <OrderStatus title="Preparing">
      <OrderStatus title="Packaging" />
      <OrderStatus title="Ready For Shipping" />
      <Button icon labelPosition="left">
        <Icon name="plus" />
        New Status
      </Button>
    </OrderStatus>
  </div>
);

const config = {
  form: 'OrderStatuses',
};
export default reduxForm(config)(Form);
