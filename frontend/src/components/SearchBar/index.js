import React from 'react';
import './style.scss';
import Input from '../ui/Input'
import { Icon } from '../ui/Icon'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar">
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
        placeholder="Search"
        icon={<Icon size={18} icon="search" />}
      />
    </div>
  );
}

export default SearchBar;
