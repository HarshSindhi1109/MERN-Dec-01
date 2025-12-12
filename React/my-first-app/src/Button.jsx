import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button style={{ backgroundColor: props.bgcolor }}>{props.btn}</button>
    </div>
  );
};

export default Button;
