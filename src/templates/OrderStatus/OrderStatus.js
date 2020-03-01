import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// required components
import { Icon } from 'semantic-ui-react';

// system components
import { IconPicker, Button } from 'atoms';
import { Field } from 'redux-form';
import { Input, Textarea, Toggle } from 'molecules/redux-form';

const OrderStatus = ({ title, children }) => {
  const [editing, editingToggle] = useState(false);
  const enableEditing = () => !editing && editingToggle(true);
  const disableEditing = () => editingToggle(false);

  return (
    <div className="order_status">
      <div className="order_status__fields">
        <IconPicker />
        <div
          className="order_status__fields__title"
          onClick={enableEditing}
        >
          {title}
          <div
            className={classNames(
              'order_status__fields__title_form',
              editing && 'order_status__fields__title_form--enable',
            )}
          >
            <Field
              component={Input}
              placeholder="Enter status title..."
            />
            <Field
              component={Textarea}
              placeholder="Enter Client Message..."
            />
            <Button icon labelPosition="left" onClick={disableEditing}>
              <Icon name="checkmark" />
              Save
            </Button>
          </div>
        </div>
        <Field
          component={Toggle}
        />
      </div>
      {children && (
        <div className="order_status__fields--sub">
          {children}
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
};

export default OrderStatus;
