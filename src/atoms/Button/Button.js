import React from 'react';
import { Button as SemButton } from 'semantic-ui-react';

const Button = (props) => (
  <SemButton
    className="custom-btn"
    {...props}
  />
);

export default Button;
