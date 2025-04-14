// src/utils/formatCurrency.js
export const formatCurrency = (amount, { currency = 'USD', locale = 'en-US', decimals = 2 } = {}) => {
    if (typeof amount !== 'number' || isNaN(amount)) return '–';
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(amount);
  };