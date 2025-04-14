// src/components/features/ExpenseTable/ExpenseTable.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import ExpenseRow from './ExpenseRow';
import { useExpenseContext } from '../../../contexts/ExpenseContext';
import { useExpenseFilter } from '../../../hooks/useExpenseFilter';
import { useExpenseSort } from '../../../hooks/useExpenseSort';
import './ExpenseTable.css';

const ExpenseTable = ({ searchTerm, sortConfig }) => {
  const { expenses, deleteExpense } = useExpenseContext();
  const filteredExpenses = useExpenseFilter(expenses, searchTerm);
  const sortedExpenses = useExpenseSort(filteredExpenses, sortConfig);

  return (
    <table className="expense-table">
      <thead>
        <tr>
          <th scope="col">Description</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedExpenses.length > 0 ? (
          sortedExpenses.map((expense) => (
            <ExpenseRow
              key={expense.id}
              expense={expense}
              deleteExpense={deleteExpense}
            />
          ))
        ) : (
          <tr>
            <td colSpan="4" className="expense-table__empty">
              No expenses found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

ExpenseTable.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  sortConfig: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc']),
  }).isRequired,
};

export default memo(ExpenseTable);