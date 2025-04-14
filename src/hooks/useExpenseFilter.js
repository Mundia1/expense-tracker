// src/hooks/useExpenseFilter.js
import { useState, useEffect, useCallback } from 'react';

export const useExpenseFilter = (expenses, searchTerm) => {
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);

  const filterExpenses = useCallback(() => {
    if (!searchTerm.trim()) return expenses;
    return expenses.filter(
      (exp) =>
        exp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [expenses, searchTerm]);

  useEffect(() => {
    const debounce = setTimeout(() => {
      setFilteredExpenses(filterExpenses());
    }, 300);
    return () => clearTimeout(debounce);
  }, [filterExpenses]);

  return filteredExpenses;
};