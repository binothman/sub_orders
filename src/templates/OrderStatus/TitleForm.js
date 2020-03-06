import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';


// required components
import { Icon } from 'semantic-ui-react';

import { Button, validations } from 'atoms';

import {
  Input,
  Textarea,
} from 'molecules/redux-form';

const TitleForm = ({
  editing,
  field,
  onSave,
  setError,
  errMessages,
}) => (
  <div
    className={classNames(
      'order_status__fields__title_form',
      editing && 'order_status__fields__title_form--enable',
    )}
  >
    <Field
      name={`${field}.title`}
      component={Input}
      placeholder="Enter status title..."
    />
    <Field
      name={`${field}.message`}
      component={Textarea}
      placeholder="Enter Client Message..."
      validate={[validations.required]}
      onBlur={(e, val) => {
        const err = val ? false : errMessages.message;
        setError(err);
      }}
    />
    <Button icon labelPosition="left" onClick={onSave}>
      <Icon name="checkmark" />
      Save
    </Button>
  </div>
);

TitleForm.propTypes = {
  editing: PropTypes.bool,
  field: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
  setError: PropTypes.func,
  errMessages: PropTypes.shape(),
};

export default TitleForm;
