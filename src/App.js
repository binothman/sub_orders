import React from "react";

// include semantic-ui styles
import "semantic-ui-css/semantic.min.css";

// Maib wrapper for all pages
import Wrapper from "atoms/Wrapper";

// Application Pagges
import OrderStatuses from "pages/OrderStatuses";

// base CSS
import "./app.css";

const App = () => (
  <Wrapper>
    <OrderStatuses />
  </Wrapper>
);

export default App;
