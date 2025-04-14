// src/components/features/ExpenseTable/ExpenseRow.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import Button from '../../ui/Button/Button';
import { formatCurrency } from '../../../utils/formatCurrency';

const ExpenseRow = ({ expense, deleteExpense }) => {
  return (
    <tr className="expense-row">
      <td>{expense.description}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{expense.category}</td>
      <td>
        <Button
          variant="danger"
          onClick={() => deleteExpense(expense.id)}
          aria-label={`Delete expense ${expense.description}`}
        >
          Delete
        </Button>
      </td>
    </tr>
  );
};

ExpenseRow.propTypes = {
  expense: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default memo(ExpenseRow);