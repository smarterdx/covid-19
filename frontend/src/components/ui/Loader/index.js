import React from 'react';
import './style.scss';

const Loader = ({ text }) => {
  return (
    <div className="loader">
      {text && <h3>{text}</h3> }
      <div class="lds-ripple"><div></div><div></div></div>
    </div>
  );
}

export default Loader;
