import React from 'react';
import { Alert } from 'react-bootstrap';

function CustomAlert({ width = '100%', fontSize = '16px', centered = false, ...props }) {
  const alertStyle = {
    width,
    fontSize,
    textAlign: centered ? 'center' : 'left',
    margin: '0 auto'
  };

  return (
    <div style={alertStyle}>
      <Alert {...props}>
        {props.children}
      </Alert>
    </div>
  );
}

export default CustomAlert;

