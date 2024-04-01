# Enhanced Authentication API

This project is an enhanced authentication API built with Node.js and Express.js. It allows users to register, log in, update their profiles, and view public profiles. The API also includes functionality for admins to view both public and private user profiles.

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed on your machine:

- Node.js
- express

### Installation

1. Run the repository:

Install dependencies:

bash
cd authentication-api
npm install
Set up environment variables:

Create a .env file in the root directory and add the following environment variables:

plaintext
PORT=3000
Start the server:

bash
npm start
The server will start on http://localhost:3000.

API Endpoints
POST /api/users/register: Register a new user.
POST /api/users/login: Log in an existing user.
PUT /api/users/profile: Update user profile.
GET /api/users/profile: Get user profile.
GET /api/users/public-profiles: Get public profiles.
Contributing
Contributions are welcome! Feel free to open issues or submit pull requests for any improvements or features you'd like to see.