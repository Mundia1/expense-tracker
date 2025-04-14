// src/components/layout/Header/Header.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import './Header.css';

const Header = ({ title = 'Expense Tracker', className = '', ...props }) => {
  return (
    <header className={`header ${className}`} {...props}>
      <h1 className="header__title">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

export default memo(Header);