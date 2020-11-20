import React from 'react';

import './Button.scss';

type ButtonProps = {
  type?: any;
  onClick: any;
  children: any;
};

const Button = ({ type = 'button', onClick, children }: ButtonProps) => (
  <button className="pd-c-button" onClick={onClick} type={type}>
    {children}
  </button>
);

export default Button;
