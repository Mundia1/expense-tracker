// src/components/ui/Input/Input.jsx
import { memo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = forwardRef(
  ({ type = 'text', label, id, error, className = '', required = false, ...props }, ref) => {
    return (
      <div className={`input-wrapper ${className}`}>
        {label && (
          <label htmlFor={id} className="input__label">
            {label}
            {required && <span className="input__required" aria-hidden="true">*</span>}
          </label>
        )}
        <input
          type={type}
          id={id}
          className={`input ${error ? 'input--error' : ''}`}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          ref={ref}
          required={required}
          {...props}
        />
        {error && (
          <span id={`${id}-error`} className="input__error" role="alert">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  className: PropTypes.string,
  required: PropTypes.bool,
};

export default memo(Input);