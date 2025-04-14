// src/components/App.jsx
import { useState, useCallback } from 'react';
import Container from './components/layout/Container/Container';
import Header from './components/layout/Header/Header';
import ExpenseForm from './components/features/ExpenseForm/ExpenseForm';
import SearchBar from './components/features/SearchBar/SearchBar';
import ExpenseActions from './components/features/ExpenseActions/ExpenseActions';
import ExpenseTable from './components/features/ExpenseTable/ExpenseTable';
import { generateId } from './utils/generateId';
import './App.css';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ field: null, order: 'asc' });

  const addExpense = useCallback((expense) => {
    setExpenses((prev) => [
      ...prev,
      { ...expense, id: generateId(), createdAt: new Date().toISOString() },
    ]);
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses((prev) => prev.filter((exp) => exp.id !== id));
  }, []);

  const updateSort = useCallback((field) => {
    setSortConfig((prev) => ({
      field,
      order: prev.field === field && prev.order === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  return (
    <Container>
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseActions sortConfig={sortConfig} updateSort={updateSort} />
      <ExpenseTable
        expenses={expenses}
        searchTerm={searchTerm}
        sortConfig={sortConfig}
        deleteExpense={deleteExpense}
      />
    </Container>
  );
};

export default App;