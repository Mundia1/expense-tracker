// src/contexts/ExpenseContext.jsx
import { createContext, useContext, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { generateId } from '../utils/generateId';

const ExpenseContext = createContext(null);

export const ExpenseProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = useCallback((expense) => {
    setExpenses((prev) => [
      ...prev,
      { ...expense, id: generateId(), createdAt: new Date().toISOString() },
    ]);
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  }, []);

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

ExpenseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useExpenseContext = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenseContext must be used within an ExpenseProvider');
  }
  return context;
};