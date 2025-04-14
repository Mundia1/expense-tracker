// src/components/features/ExpenseForm/ExpenseForm.jsx
import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';
import './ExpenseForm.css';

const ExpenseForm = ({ addExpense }) => {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.amount || formData.amount <= 0) newErrors.amount = 'Valid amount is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    addExpense({
      description: formData.description.trim(),
      amount: parseFloat(formData.amount),
      category: formData.category.trim(),
    });

    setFormData({ description: '', amount: '', category: '' });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit} noValidate>
      <Input
        label="Description"
        id="description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        error={errors.description}
        required
      />
      <Input
        label="Amount"
        id="amount"
        name="amount"
        type="number"
        step="0.01"
        value={formData.amount}
        onChange={handleChange}
        error={errors.amount}
        required
      />
      <Input
        label="Category"
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        error={errors.category}
        required
      />
      <Button type="submit" variant="success">
        Add Expense
      </Button>
    </form>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
};

export default memo(ExpenseForm);