import React from 'react';
import './style.scss';

const PageContent = ({ className, placeholder, type, textarea, value, onChange, icon }) => {
  return (
    <div className={`input ${className && className} ${icon && 'with-icon'}`}>
      { textarea ?
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        :
        <input
          type={type ? type : 'text' }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      }
      { icon && icon }
    </div>
  );
}

export default PageContent;
