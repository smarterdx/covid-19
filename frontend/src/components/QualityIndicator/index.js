import React from 'react';
import './style.scss';
import Badge from '../ui/Badge';

const QualityIndicator = ({ type, quality }) => {
  return (
    <span className={`quality-indicator-wrapper ${type === 'Revenue' && 'revenue'}`}>
      <Badge light className="quality-indicator">
        { type === 'Revenue' ? <>
            <span className={`revenue-icon ${quality >= 1 && 'lit'}`}>$</span>
            <span className={`revenue-icon ${quality >= 2 && 'lit'}`}>$</span>
            <span className={`revenue-icon ${quality >= 3 && 'lit'}`}>$</span>
          </> :
          type === 'POA' ? <>
            <span className="poa-icon">POA</span>
          </> :
          type === 'Elixhauser' ? 'Elx' :
          type === 'Vizient' ? 'Viz' :
          type
        }
      </Badge>
    </span>
  );
}

export default QualityIndicator;
