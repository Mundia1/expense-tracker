// src/components/features/ExpenseTable/ExpenseTable.jsx
import { memo } from 'react';
import PropTypes from 'prop-types';
import ExpenseRow from './ExpenseRow';
import './ExpenseTable.css';

const ExpenseTable = ({ expenses, searchTerm, sortConfig, deleteExpense }) => {
  // Filter expenses
  const filteredExpenses = expenses.filter(
    (exp) =>
      exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      exp.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort expenses
  const sortedExpenses = [...filteredExpenses].sort((a, b) => {
    if (!sortConfig.field) return 0;
    const valueA = a[sortConfig.field].toLowerCase();
    const valueB = b[sortConfig.field].toLowerCase();
    return sortConfig.order === 'asc'
      ? valueA.localeCompare(valueB)
      : valueB.localeCompare(valueA);
  });

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
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchTerm: PropTypes.string.isRequired,
  sortConfig: PropTypes.shape({
    field: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc']),
  }).isRequired,
  deleteExpense: PropTypes.func.isRequired,
};

export default memo(ExpenseTable);