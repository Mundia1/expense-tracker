// src/components/features/SearchBar/SearchBar.jsx
import { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Input from '../../ui/Input/Input';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    setSearchTerm(newValue);
  };

  return (
    <div className="search-bar">
      <Input
        label="Search Expenses"
        id="search"
        type="search"
        value={value}
        onChange={handleChange}
        placeholder="Search by description or category..."
      />
    </div>
  );
};

SearchBar.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default memo(SearchBar);