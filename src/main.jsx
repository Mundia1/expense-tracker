// src/main.jsx
import { StrictMode, Component } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ExpenseProvider } from './contexts/ExpenseContext';
import './index.css';
import { HashRouter as Router } from 'react-router-dom'; // Import HashRouter

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ErrorBoundary>
      <ExpenseProvider>
        <Router basename={process.env.PUBLIC_URL}> {/* Wrap App with Router */}
          <App />
        </Router>
      </ExpenseProvider>
    </ErrorBoundary>
  </StrictMode>
);