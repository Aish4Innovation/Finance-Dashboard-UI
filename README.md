# Finance-Dashboard-UI

Overview

Finance Dashboard UI is a frontend application built to help users track and understand their financial activity through a clean and interactive interface. The project focuses on intuitive design, modular component structure, and efficient state handling using mock data.

The application demonstrates how financial data can be visualized using summary metrics, charts, and transaction-level insights, without relying on a backend.

Live Demo

https://finance-dashboard-ui-three-rosy.vercel.app?_vercel_share=liOlBZkfwQU8ipxl3vsp8lLkKfKJeJpH

Features
Dashboard Overview
Displays key financial metrics including total balance, income, and expenses
Time-based visualization showing balance trends
Category-based visualization for spending breakdown
Transactions Section
Displays a list of transactions with:
Date
Description
Category
Amount
Includes:
Search functionality
Basic filtering
Clear tabular structure for readability
Role-Based UI (Frontend Simulation)
Two roles implemented:
Admin: Can add transactions
Viewer: Read-only access
Role switching dynamically updates UI behavior
Add Transaction button is conditionally rendered based on role
Add Transaction
Modal-based form for adding new transactions
Updates transaction list in real time using state
Insights
Highlights spending patterns using visual charts
Enables users to understand category-wise expenses and trends
Technical Approach
Component-Based Architecture

The application is structured into reusable and modular components to improve maintainability and scalability.

State Management
Managed using React state
Handles:
Transactions data
User role (Admin/Viewer)
UI interactions such as modal visibility and filters
Styling
Implemented using standard CSS
Focus on clean layout, spacing, and readability
Dark-themed UI for better visual hierarchy
Data Handling
Uses static/mock data
Designed in a way that can be easily extended to integrate APIs


Project Structure

<img width="371" height="770" alt="image" src="https://github.com/user-attachments/assets/485f8ce4-979a-44d0-af75-6fc0ad002102" />

Setup Instructions
Prerequisites
Node.js (v18 or higher)
npm
Installation

Clone the repository:

git clone https://github.com/Aish4Innovation/Finance-Dashboard-UI.git
cd Finance-Dashboard-UI

Install dependencies:

npm install

Run the application:

npm run dev

Open in browser:
http://localhost:5173
