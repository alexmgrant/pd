import React from 'react';

import './Card.scss';

type CardProps = {
  children: any;
};

const Card = ({ children }: CardProps) => {
  return <div className="pd-c-card">{children}</div>;
};

export default Card;
