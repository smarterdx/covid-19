import React from 'react';
import './style.scss';

const Badge = ({ children, className, style, strong, light, extraLight, warning }) => {
  return (
    <span className={`
      badge 
      ${className && className} 
      ${strong && 'strong'}
      ${light && 'light'}
      ${extraLight && 'extra-light'} 
      ${warning && 'warning'}
    `}
    style={style}
    >
      {children}
    </span>
  );
}

export default Badge;
