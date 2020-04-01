import React from 'react';
import './style.scss';

const PageContent = ({ children, className }) => {
  return (
    <div className={`page-content ${className && className}`}>
      <div>
        {children}
      </div>
    </div>
  );
}

export default PageContent;
