// src/hooks/useExpenseSort.js
import { useMemo } from 'react';

export const useExpenseSort = (expenses, sortConfig) => {
  return useMemo(() => {
    if (!sortConfig.field) return expenses;
    return [...expenses].sort((a, b) => {
      const valueA = a[sortConfig.field].toLowerCase();
      const valueB = b[sortConfig.field].toLowerCase();
      return sortConfig.order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueB);
    });
  }, [expenses, sortConfig]);
};