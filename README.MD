# Personal Expense Tracker API

## Setup and run Instructions

1. Install dependencies:
   bash -> npm install
2. Run the server:
   bash -> node app.js

//////////////////////////////
API Endpoints
Add Transaction
POST /transactions
Request body: { "type": "income", "category": "salary", "amount": 1000, "date": "2023-10-01", "description": "Monthly salary" }
Response: { "id": 1 }
Get All Transactions
GET /transactions
Response: [ { "id": 1, ... }, ... ]
Get Transaction by ID
GET /transactions/
Response: { "id": 1, "type": "income", ... }
Update Transaction
PUT /transactions/
Request body: { "type": "expense", ... }
Response: { "message": "Transaction updated" }
Delete Transaction
DELETE /transactions/
Response: { "message": "Transaction deleted" }
Get Summary
GET /transactions/summary
Response: [ { "type": "income", "total": 1000 }, { "type": "expense", "total": 500 } ]
