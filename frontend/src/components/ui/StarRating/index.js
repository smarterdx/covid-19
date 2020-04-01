import React from 'react';
import './style.scss';
import { Icon } from '../Icon';

const StarRating = ({ className, rating }) => {
  return (
    <div className={`star-rating rating-value-${rating} ${className && className}`}>
      <Icon icon="star" size={14} /> 
      <Icon icon="star" size={14} /> 
      <Icon icon="star" size={14} /> 
    </div>
  );
}

export default StarRating;
