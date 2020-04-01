import React from 'react';
import './style.scss';

const Container = ({ children, className, box, mb }) => {
  return (
    <div className={`
      container 
      ${className && className}
      ${box && 'box'}
      ${mb &&
        `mb-${mb}`
      }
    `}>
      {children}
    </div>
  );
}

export default Container;
