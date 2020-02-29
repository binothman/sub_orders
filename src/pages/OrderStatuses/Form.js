import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Input, Toggle } from 'molecules/redux-form';
import { IconPicker, Align } from 'atoms';
import { SubStatus } from 'templates'

const Form = () => (
  <div>
    <Align>
      <IconPicker />
      <Field
        fluid
        name="name"
        component={Input}
        style={{ width: '80%', marginLeft: '10px' }}
      />
      <Field
        component={Toggle}
        style={{ width: '10%', float: 'right', textAlign: 'right' }}
      />
    </Align>
    <SubStatus>
      <Align>
        <IconPicker />
        <Field
          fluid
          name="name"
          component={Input}
          style={{ width: '80%', marginLeft: '10px' }}
        />
        <Field
          component={Toggle}
          style={{ width: '10%', float: 'right', textAlign: 'right' }}
        />
      </Align>
    </SubStatus>
  </div>
);

const config = {
  form: 'OrderStatuses',
};
export default reduxForm(config)(Form);
