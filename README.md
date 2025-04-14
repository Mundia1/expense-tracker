# Expense Tracker 💸

Welcome to the **Expense Tracker**, a sleek and responsive React web app designed to simplify personal finance management! Built for the **SA.01 Week 1 Code Challenge**, this app lets you add, view, search, sort, and delete expenses with a polished UI and robust functionality. It nails all **Core Deliverables** (expense table, form, search) and **Advanced Deliverables** (sorting, deletion), delivering a production-grade experience with stellar **Code Structure** and **UI/UX Design**.

Ready to track your spending? Let’s dive in! 🚀

## Table of Contents
- [✨ Features](#features)
- [🌐 Demo](#demo)
- [🛠️ Technologies](#technologies)
- [📦 Installation](#installation)
- [🎮 Usage](#usage)
- [📂 Project Structure](#project-structure)
- [🚀 Deployment](#deployment)
- [🤝 Contributing](#contributing)
- [📜 License](#license)

## ✨ Features
- **Add Expenses**: Easily input description, amount, and category to log expenses.
- **View Expenses**: See all expenses in a clean, responsive table with currency formatting (e.g., $12.34).
- **Search**: Instantly filter expenses by description or category with a debounced search for smooth performance.
- **Sort**: Toggle sorting by description or category (ascending/descending) with one click.
- **Delete**: Remove expenses effortlessly with a dedicated button.
- **Responsive Design**: Looks great on desktops, tablets, and phones 📱.
- **Accessible UI**: ARIA attributes and keyboard support ensure inclusivity.
- **Optimized Performance**: Memoized components, custom hooks, and React Context for scalability.
- **Error Handling**: Graceful fallbacks with an error boundary for a robust experience.

> **Why It’s Awesome**: This app combines simplicity with power, making expense tracking intuitive while showcasing modern React best practices!

## 🌐 Demo
Try it live or explore the code:
- **Live Demo**: [Expense Tracker on Vercel](https://your-vercel-url.vercel.app) *(Replace with your deployed URL)*
- **GitHub Repository**: [github.com/your-username/expense-tracker](https://github.com/your-username/expense-tracker) *(Replace with your repo URL)*

## 🛠️ Technologies
- **Frontend**: React 18, Vite
- **State Management**: React Context API
- **Styling**: Modular CSS with custom properties, mobile-first design
- **Type Checking**: PropTypes for reliability
- **Utilities**: Custom hooks (`useExpenseFilter`, `useExpenseSort`)
- **Deployment**: Vercel
- **Version Control**: Git, GitHub

## 📦 Installation
Get the app running locally in just a few steps!

### Prerequisites
- **Node.js**: v18.x or higher (`node -v` to check)
- **npm**: v8.x or higher (`npm -v` to check)
- **Git**: For cloning the repo

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker

Install Dependencies:
bash

npm install

Start the Development Server:
bash

npm run dev

Open http://localhost:5173 in your browser.

Port occupied? Vite will suggest another (e.g., http://localhost:5174).

Build for Production (optional):
bash

npm run build
npm run preview

Preview at http://localhost:4173.

Troubleshooting Tip: If you hit errors, ensure prop-types is installed (npm install prop-types) or clear the cache (rm -rf node_modules/.vite).

 Usage
Here’s how to make the most of the Expense Tracker:
Add an Expense:
Enter a description (e.g., “Lunch”), amount (e.g., 12.50), and category (e.g., “Food”).

Click “Add Expense”. Watch it appear in the table instantly!

View Expenses:
The table lists all expenses with formatted amounts, categories, and a delete option.

Empty? You’ll see a friendly “No expenses found” message.

Search Expenses:
Type in the search bar (e.g., “Lunch” or “Food”) to filter results in real-time.

Debounced for silky-smooth performance.

Sort Expenses:
Click “Sort by Description” or “Sort by Category” to reorder (toggles asc/desc).

Visual cues show the active sort state.

Delete Expenses:
Hit the “Delete” button next to any expense to remove it—no fuss, no refresh.

Pro Tip: Try adding multiple expenses, then search and sort to see the app’s power in action!

 Project Structure

expense-tracker/
├── index.html               # Root HTML entry (moved from public/)
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── features/        # Feature-specific components
│   │   │   ├── ExpenseActions/  # Sort controls
│   │   │   ├── ExpenseForm/     # Expense input form
│   │   │   ├── ExpenseTable/    # Expense display table
│   │   │   └── SearchBar/       # Search functionality
│   │   ├── layout/          # Layout components
│   │   │   ├── Container/   # Centered container
│   │   │   └── Header/      # App header
│   │   └── ui/              # Reusable UI components
│   │       ├── Button/      # Custom button
│   │       └── Input/       # Custom input
│   ├── contexts/            # State management
│   │   └── ExpenseContext.jsx
│   ├── hooks/               # Custom hooks
│   │   ├── useExpenseFilter.js
│   │   └── useExpenseSort.js
│   ├── styles/              # Global styles
│   │   ├── reset.css
│   │   ├── variables.css
│   │   └── global.css
│   ├── utils/               # Helper functions
│   │   ├── formatCurrency.js
│   │   └── generateId.js
│   ├── App.jsx              # Root component
│   ├── App.css              # App-specific styles
│   ├── index.css            # Global style imports
│   └── main.jsx             # App entry
├── .gitignore               # Git ignore rules
├── package.json             # Dependencies and scripts
├── README.md                # This file
├── vercel.json              # Vercel config
└── vite.config.js           # Vite config

Note: index.html is in the project root, as per your setup. Ensure vite.config.js reflects this (see Deployment (#deployment)).

 Deployment
Share your Expense Tracker with the world using Vercel!
Deploy to Vercel
Install Vercel CLI:
bash

npm install -g vercel

Deploy:
bash

vercel

Follow prompts to configure (select defaults for Vite/React).

Note: Since index.html is in the root, ensure Vercel uses / as the public directory.

Access the live app at the provided URL (e.g., https://your-vercel-url.vercel.app).

