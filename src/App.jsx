// src/App.jsx
import { useState, useCallback } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Container from './components/layout/Container/Container';
import Header from './components/layout/Header/Header';
import ExpenseForm from './components/features/ExpenseForm/ExpenseForm';
import SearchBar from './components/features/SearchBar/SearchBar';
import ExpenseActions from './components/features/ExpenseActions/ExpenseActions';
import ExpenseTable from './components/features/ExpenseTable/ExpenseTable';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ field: null, order: 'asc' });

  const updateSort = useCallback((field) => {
    setSortConfig((prev) => ({
      field,
      order: prev.field === field && prev.order === 'asc' ? 'desc' : 'asc',
    }));
  }, []);

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Container>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar setSearchTerm={setSearchTerm} />
                <ExpenseForm />
                <ExpenseActions sortConfig={sortConfig} updateSort={updateSort} />
                <ExpenseTable searchTerm={searchTerm} sortConfig={sortConfig} />
              </>
            }
          />
          {/* You can add other routes here as needed */}
          {/* Example:
          <Route path="/expenses" element={<ExpensesPage />} />
          <Route path="/report" element={<ReportPage />} />
          */}
        </Routes>
      </Container>
    </Router>
  );
};

export default App;