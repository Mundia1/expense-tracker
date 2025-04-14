// src/utils/generateId.js
export const generateId = () => {
    const timestamp = Date.now().toString(36); // Base36 timestamp
    const random = Math.random().toString(36).slice(2, 8); // Random segment
    return `${timestamp}-${random}`; // Unique ID (e.g., "1j4k5x6-a1b2c3")
  };