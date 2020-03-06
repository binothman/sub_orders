import React from 'react';

const Errors = ({ errors }) => {
  if (!errors) return <div />;

  return Object.keys(errors).map((err, index) => {
    if (err === 'sub_statuses') return null;

    return (
      <div
        key={`errr-${index}`}
        style={{ color: 'red' }}
      >
        {errors[err]}
      </div>
    );
  });
};

export default Errors;
