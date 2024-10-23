# Personal Expense Tracker API

## Setup and run Instructions

1. Install dependencies:
   bash -> npm install
2. Run the server:
   bash -> node app.js
API Endpoints
1. Create a New Transaction
Endpoint: POST /transactions
Description: Adds a new income or expense transaction.
Request
Headers:
Content-Type: application/json
Body:jsonCopy code{
  "type": "income/expense",
  "category": "string",
  "amount": number,
  "date": "YYYY-MM-DD",
  "description": "string"
}

Response
201 CreatedjsonCopy code{
  "id": number,
  "type": "income/expense",
  "category": "string",
  "amount": number,
  "date": "YYYY-MM-DD",
  "description": "string"
}

400 Bad Request (if input is invalid)

2. Retrieve All Transactions
Endpoint: GET /transactions
Description: Retrieves a list of all transactions.
Response
200 OKjsonCopy code[
  {
    "id": number,
    "type": "income/expense",
    "category": "string",
    "amount": number,
    "date": "YYYY-MM-DD",
    "description": "string"
  }
]


3. Retrieve a Transaction by ID
Endpoint: GET /transactions/:id
Description: Retrieves a specific transaction by its ID.
Response
200 OKjsonCopy code{
  "id": number,
  "type": "income/expense",
  "category": "string",
  "amount": number,
  "date": "YYYY-MM-DD",
  "description": "string"
}

404 Not Found (if transaction does not exist)

4. Update a Transaction by ID
Endpoint: PUT /transactions/:id
Description: Updates an existing transaction by its ID.
Request
Headers:
Content-Type: application/json
Body:jsonCopy code{
  "type": "income/expense",
  "category": "string",
  "amount": number,
  "date": "YYYY-MM-DD",
  "description": "string"
}

Response
200 OKjsonCopy code{
  "id": number,
  "type": "income/expense",
  "category": "string",
  "amount": number,
  "date": "YYYY-MM-DD",
  "description": "string"
}

404 Not Found (if transaction does not exist)
400 Bad Request (if input is invalid)

5. Delete a Transaction by ID
Endpoint: DELETE /transactions/:id
Description: Deletes a transaction by its ID.
Response
204 No Content (on success)
404 Not Found (if transaction does not exist)

6. Retrieve Transaction Summary
Endpoint: GET /summary
Description: Retrieves a summary of transactions including total income, total expenses, and balance.
Query Parameters (optional)
startDate: "YYYY-MM-DD"
endDate: "YYYY-MM-DD"
Response
200 OKjsonCopy code{
  "totalIncome": number,
  "totalExpenses": number,
  "balance": number
}


Error Handling
The API handles common errors with appropriate status codes:
400 Bad Request: For invalid inputs.
404 Not Found: For requests involving non-existing transactions.
Postman Examples
Create a Transaction
Method: POST
URL: http://localhost:3000/transactions
Body:jsonCopy code{
  "type": "income",
  "category": "Salary",
  "amount": 5000,
  "date": "2024-01-15",
  "description": "Monthly salary"
}

Get All Transactions
Method: GET
URL: http://localhost:3000/transactions
Get Transaction by ID
Method: GET
URL: http://localhost:3000/transactions/1
Update a Transaction
Method: PUT
URL: http://localhost:3000/transactions/1
Body:jsonCopy code{
  "type": "expense",
  "category": "Food",
  "amount": 150,
  "date": "2024-01-16",
  "description": "Grocery shopping"
}

Delete a Transaction
Method: DELETE
URL: http://localhost:3000/transactions/1
Get Summary
Method: GET
URL: http://localhost:3000/summary?startDate=2024-01-01&endDate=2024-01-31
