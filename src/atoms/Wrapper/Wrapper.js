/*
  Wrapper Component
  -- the main wrappe for the app
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'semantic-ui-react';

const Wrapper = ({ children }) => (
  <div className="page-wrapper">
    <Container>
      {children}
    </Container>
  </div>
);

Wrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Wrapper;
