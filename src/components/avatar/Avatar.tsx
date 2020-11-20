import React from 'react';

import './Avatar.scss';

type AvatarProps = {
  src: string;
  alt: string;
};

const Avatar = ({ src, alt }: AvatarProps) => {
  return (
    <div className="pd-c-avatar">
      <img src={src} alt={`${alt}'s avatar`} className="pd-c-avatar__img" />
    </div>
  );
};

export default Avatar;
