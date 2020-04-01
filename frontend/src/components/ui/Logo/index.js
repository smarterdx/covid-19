import React from 'react';
import './style.scss';

const Logo = ({ className, logo }) => {
  return (
    <div className={`org-logo ${className && className}`}>
      <img src={logo} />
    </div>
  );
}

export default Logo;
