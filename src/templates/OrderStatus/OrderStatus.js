/*
  Order Status Template
  -- use this file to edit the design of the order status
*/
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Components
import { Field } from 'redux-form';
import { Icon } from 'semantic-ui-react';
import { Button } from 'atoms';

import {
  IconPicker,
  Toggle,
} from 'molecules/redux-form';


import TitleForm from './TitleForm';

const OrderStatus = ({
  title,
  children,
  field,
  index,
  addNewStatus,
  sub_statuses,
}) => {
  const [editing, editingToggle] = useState(false);
  const enableEditing = () => !editing && editingToggle(true);
  const disableEditing = () => editingToggle(false);

  return (
    <div className={classNames(
      'order_status',
      children && 'nested',
    )}
    >
      <div className="order_status__fields">
        <Field
          name={`${field}.icon`}
          component={IconPicker}
        />
        <div
          className="order_status__fields__title"
          onClick={enableEditing}
        >

          {title || `Status ${index + 1}`}

          <TitleForm
            editing={editing}
            onSave={disableEditing}
            field={field}
          />

        </div>
        <Field
          name={`${field}.active`}
          component={Toggle}
        />
      </div>

      {/* render sub statuses */}
      {(children || addNewStatus) && (
        <div className="order_status__fields--sub">
          {children}

          {addNewStatus && (
            <Button
              icon
              labelPosition="left"
              onClick={() => addNewStatus(field, sub_statuses)}
            >
              <Icon name="plus" />
              New Status
            </Button>
          )}
        </div>
      )}

    </div>
  );
};

OrderStatus.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  title: PropTypes.string,
  field: PropTypes.node,
  index: PropTypes.number,
  addNewStatus: PropTypes.func,
  sub_statuses: PropTypes.arrayOf(Object),
};

export default OrderStatus;
