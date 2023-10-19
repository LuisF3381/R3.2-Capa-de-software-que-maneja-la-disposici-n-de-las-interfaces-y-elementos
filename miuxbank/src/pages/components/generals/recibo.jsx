import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CustomCardRecibo({ width = 'auto', height = 'auto', bordered = true, color = 'white', ...props }) {
  const cardStyle = {
    width,
    height,
    border: bordered ? '' : 'none',
    backgroundColor: color
  };

  return (
    <Card style={cardStyle} {...props}>
      <Card.Body>
        {props.children}
      </Card.Body>
    </Card>
  );
}

export default CustomCardRecibo;
