import React from 'react';

function Alert(props) {
  const { message, success } = props;
  return (
    <div className={`alert alert-${success ? 'success' : 'error'}`}>
      {message}
    </div>
  );
}

export default Alert;
