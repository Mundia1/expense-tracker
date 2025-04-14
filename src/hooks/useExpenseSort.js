// src/hooks/useExpenseSort.js
import { useMemo } from 'react';

export const useExpenseSort = (expenses, sortConfig) => {
  return useMemo(() => {
    if (!sortConfig.field) return expenses;
    
    return [...expenses].sort((a, b) => {
      // Handle numeric sorting for amount
      if (sortConfig.field === 'amount') {
        return sortConfig.order === 'asc' 
          ? a.amount - b.amount 
          : b.amount - a.amount;
      }
      
      // Handle string sorting for other fields
      const valueA = String(a[sortConfig.field]).toLowerCase();
      const valueB = String(b[sortConfig.field]).toLowerCase();
      
      return sortConfig.order === 'asc'
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });
  }, [expenses, sortConfig]);
};