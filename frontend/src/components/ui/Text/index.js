import React from 'react';
import './style.scss';

const Text = ({
    children,
    className,
    secondary,
    primary,
    sectionTitle
  }) => {
  return (
    <p className={`
      ${className && className}
      ${secondary && "secondary"}
      ${primary && "primary"}
      ${sectionTitle && "section-title"}
    `}>
      {children}
    </p>
  );
}

export default Text;
