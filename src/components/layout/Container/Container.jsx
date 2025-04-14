// src/components/layout/Container/Container.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = ({ children, className = '', ...props }) => {
  return (
    <div className={`container ${className}`} {...props}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default memo(Container);