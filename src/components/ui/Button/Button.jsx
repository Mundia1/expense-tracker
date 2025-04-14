// src/components/ui/Button/Button.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ variant = 'primary', children, isLoading = false, disabled = false, className = '', ...props }) => {
  return (
    <button
      className={`button button--${variant} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="button__spinner" aria-hidden="true">
          Loading...
        </span>
      ) : (
        children
      )}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'success', 'danger']),
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default memo(Button);