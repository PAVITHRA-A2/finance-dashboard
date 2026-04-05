# Finance Dashboard

A simple Finance Dashboard built using **React (Frontend)** and **Node.js + Express (Backend)**.
It allows users to manage financial transactions and visualize monthly expenses.

---

## Features

* Add new transactions
* Delete transactions
* View all transactions
* Search transactions by category
* Monthly expense chart
* Financial summary (Balance, Income, Expense)

---

## Tech Stack

Frontend

* React
* Vite
* CSS
* Chart.js

Backend

* Node.js
* Express
* JSON file storage

---

## Project Structure

The project is organized into two main parts: **backend** and **frontend**.

The **backend** folder contains the server-side code.
It includes `server.js`, which runs the Node.js and Express server, and `transactions.json`, which is used to store transaction data.

The **frontend** folder contains the React application.
Inside the `src` folder are the main frontend files. The `components` folder stores reusable UI components used in the dashboard.
`App.jsx` is the main React component that renders the application.
`api.js` handles communication between the frontend and backend APIs.
`index.css` contains the global styles for the user interface.

The `package.json` file in the frontend folder manages project dependencies and scripts needed to run the React application.

---

## Setup Instructions

### 1. Clone the Repository

git clone https://github.com/PAVITHRA-A2/finance-dashboard.git

cd finance-dashboard

---

## Backend Setup

Navigate to backend folder

cd backend

Install dependencies

npm install

Run the backend server

node server.js

Server will run on

http://localhost:5000

---

## Frontend Setup

Navigate to frontend folder

cd frontend

Install dependencies

npm install

Run frontend

npm run dev

Frontend will run on

http://localhost:5173

---

## Dashboard Functionalities

* Add transaction with date, amount, category and type
* Delete transaction from table
* Search transactions by category
* View monthly chart of expenses
* Financial summary cards for balance, income and expense

---

## Author

Pavithra
