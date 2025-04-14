// src/components/features/ExpenseActions/ExpenseActions.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../../ui/Button/Button';
import './ExpenseActions.css';

const ExpenseActions = ({ sortConfig, updateSort }) => {
  const getButtonLabel = (field) => {
    const isActive = sortConfig.field === field;
    const order = isActive ? sortConfig.order.toUpperCase() : 'ASC';
    return `Sort by ${field.charAt(0).toUpperCase() + field.slice(1)} (${order})`;
  };

  return (
    <div className="expense-actions">
      <Button
        onClick={() => updateSort('description')}
        className={sortConfig.field === 'description' ? 'active' : ''}
      >
        {getButtonLabel('description')}
      </Button>
      <Button
        onClick={() => updateSort('category')}
        className={sortConfig.field === 'category' ? 'active' : ''}
      >
        {getButtonLabel('category')}
      </Button>
    </div>
  );
};

ExpenseActions.propTypes = {
  sortConfig: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc']),
  }).isRequired,
  updateSort: PropTypes.func.isRequired,
};

export default memo(ExpenseActions);