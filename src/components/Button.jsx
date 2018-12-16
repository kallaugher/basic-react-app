import * as React from 'react';

const baseClass = 'button';

const Button = ({ text }) => (
  <button className={baseClass}>
    {text}
  </button>
);

export default Button;
