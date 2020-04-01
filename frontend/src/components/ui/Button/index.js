import React from 'react';
import './style.scss';

const Button = ({ children, onClick, style, className, secondary, disabled, full, small, noBorder }) => {
  return (
    <button
      type="button"
      style={style}
      className={`
        ${className}
        ${secondary && "secondary"}
        ${disabled && "disabled"}
        ${full && "full"}
        ${small && "small"}
        ${noBorder && "no-border"}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
