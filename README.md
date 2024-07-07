# NestJS CRUD API

This is a simple CRUD API built using NestJS with MongoDB as the database. The application supports user authentication and todo management.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)

## Installation

1. **Clone the repository:**

   https://github.com/ab-hakim-ayman/nestjs-crud-api.git
   cd nestjs-crud-api
2. **Install the dependencies:**

   npm install
3. **Start the application:**

    npm run start:dev

## Environment Variables

**Create a `.env` file in the root directory and add the following variables:**

JWT_SECRET=d3b07384d113edec49eaa6238ad5ff00

JWT_EXPIRATION_TIME=3600s

DATABASE_URL=mongodb://localhost:27017/

## API Documentation

#### **Authentication**

**1. Sign Up**

* **URL:**`/auth/signup`
* **Method:** `POST`
* **Body:** {
  "username": "string",
  "password": "string"
  }
* **Respose:**{
  "username": "string",
  "password": "string",
  "id": "string"
  }

**2. Sign In**

* **URL:**`/auth/signin`
* **Method:** `POST`
* **Body:**{
  "username": "string",
  "password": "string"
  }
* **Response:**{
  "access_token": "string"
  }

#### Todos

**1. Get All Todos**

* **URL:** `/todos`
* **Method:** `GET`
* **Headers:** `Authorization: Bearer <token>`
* **Response:**[
  {
  "id": "string",
  "title": "string",
  "description": "string",
  "isArchived": "boolean",
  "isDeleted": "boolean"
  }
  ]

**2. Get Archived Todos**

* **URL:** `/todos/archived`
* **Method:** `GET`
* **Headers:** `Authorization: Bearer <token>`
* **Response:**[
  {
  "id": "string",
  "title": "string",
  "description": "string",
  "isArchived": "boolean",
  "isDeleted": "boolean"
  }
  ]

**3. Get Todo by ID**

* **URL:** `/todos/:id`
* **Method:** `GET`
* **Headers:** `Authorization: Bearer <token>`
* **Response:**{
  "id": "string",
  "title": "string",
  "description": "string",
  "isArchived": "boolean",
  "isDeleted": "boolean"
  }

**4. Create Todo**

* **URL:** `/todos`
* **Method:** `POST`
* **Headers:** `Authorization: Bearer <token>`
* **Body:**{
  "title": "string",
  "description": "string",
  "isArchived": "boolean",
  "isDeleted": "boolean"
  }

#### 5. Update Todo

* **URL:** `/todos/:id`
* **Method:** `PUT`
* **Headers:** `Authorization: Bearer <token>`
* **Body:**{
  "title": "string",
  "description": "string"
  **}**
* Response:{
  "id": "string",
  "title": "string",
  "description": "string",
  "isArchived": "boolean",
  "isDeleted": "boolean"
  }

**6. Delete Todo**

* **URL:** `/todos/soft/:id`
* **Method:** `DELETE`
* **Headers:** `Authorization: Bearer <token>`
* **Response:**{
  "message":"Todo soft deleted successfully"
  }

**7. Restore Todo**

* **URL:** `/todos/restore/:id`
* **Method:** `PUT`
* **Headers:** `Authorization: Bearer <token>`
* **Response:**{
  "id": "string",
  "title": "string",
  "description": "string",
  "isArchived": "boolean",
  "isDeleted": "boolean"
  }

**8. Permanent Delete Todo**

* **URL:** `/todos/permanent/:id`
* **Method:** `DELETE`
* **Headers:** `Authorization: Bearer <token>`
* **Response:**{
  "message": "Todo permanently deleted"
  }
