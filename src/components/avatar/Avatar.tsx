import React from 'react';

import './Avatar.scss';

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="pd-c-avatar">
      <img src={src} alt={`${alt}'s avatar`} />
    </div>
  );
};

export default Avatar;
