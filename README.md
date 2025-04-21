# 🛍️ Project Summary: Banana Store

The Banana Store is a simple backend project built with **Node.js**, **Express.js**, and **MongoDB**.

It is designed to store and manage product data , including:

- 🗂️ Product information

This backend provides a clean and structured API for handling and storing store-related data.

---

### 👥 Contributions

- 👨‍💻 [Andrei](https://github.com/raizy21)

_Is maintainers for this repository._

---

# 🧰 Key Technologies

- ⚙️ **Backend**: Node.js + Express.js
- 🗃️ **Database**: MongoDB

---

## 🧰 Prerequisites

Before running this server, ensure you have the following installed:

- 🟢 [nodejs](https://nodejs.org/)
- 📦 [npm](https://www.npmjs.com/)

---

## 📥 Installation

1. 📂 Clone the repository:

   ```bash
    git@github.com:raizy21/banana-store.git
    cd banana-store
   ```

2. 📦 Install dependencies:

   ```bash
   npm install
   ```

---

## 🚀 Running the Server

To start the server, run the following command:

```bash
npm run dev
```

🌐 The server will start running at [http://localhost:5000](http://localhost:5000)

---

## 🧠 Backend

- 🏗️ Set up a Node.js server using the built-in `http` module in `package.json`.
  `"type": "module",`

- 🛢️ The `mongoose` package connects your MngoDb database.
- 🧬 Create a new instance of `MongoDB`.

- 🔌 `connectDB` tests the database connection on startup:
  - ✅ Logs `"MongoDB connected : ${connectDB.connection.host}"` if successful
  - ❌ Logs `"MongoDB connection error:", error` if it fails

---

## 📡 API Endpoints Overview

This section outlines the available backend API routes for the Banana Store project. These endpoints support key functionalities such as fetching products, searching in real-time.

---

### 📦 Get All Products

> **[GET]** `/api/products` – _Fetch all products from the store_

This endpoint retrieves a list of all products stored in the MongoDB database.

---

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

```json
GET /api/products
{
  "success": true,
  "data": [
    {
      "_id": "605c5ef2e3a14f0015c9e9f4",
      "name": "banana-1",
      "price": "21.21",
      "image": "https://example.com/banana-1.jpg",
      "__v": 0
    },
    {
      "_id": "605c5ef2e3a14f0015c9e9f5",
      "name": "banana-2",
      "price": 899.21,
      "image": "https://example.com/banana-2.jpg",
      "__v": 0
    }
  ]
}
```

### ➕ Create a New Product

> **[POST]** `/api/products` – _Add a new product to the store_

This endpoint allows you to create and store a new product in the MongoDB database.

#### 📥 Request Body

Send a JSON object with the following required fields:

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

**Example:**

```json
POST /api/products
{
  "name": "banana-1",
  "price": 21.21,
  "image": "https://example.com/banana-1.jpg"
}
```

### ✏️ Update a Product

> **[PUT]** `/api/products/:id` – _Update an existing product by ID_

This endpoint updates an existing product in the MongoDB database using its unique ID. You must provide the fields you want to update in the request body.

---

#### 🔗 URL Parameter

- `:id` – The `_id` of the product to update

**Example:**

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

```json

PUT /api/products/605c5ef2e3a14f0015c9e9f4

{
  "name": "banana-expert",
  "price": 21.21,
  "image": "https://example.com/banana-expert.jpg"
}
```

### 🗑️ Delete a Product

> **[DELETE]** `/api/products/:id` – _Remove a product by its ID_

This endpoint allows you to delete an existing product from the MongoDB database by providing its unique ID.

#### 🔗 URL Parameter

- `:id` – The unique identifier (`_id`) of the product to be deleted

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

**Example:**

```json
DELETE /api/products/605c5ef2e3a14f0015c9e9f4
```

---

# 🗃️ Database

I use [🍃 MongoDB](https://www.mongodb.com/) as database solution.

🛠️ My data is stored in collections rather than tables, and I manage the schema and connection using [Mongoose](https://mongoosejs.com/).

---

## 📦 Dependencies

- [**Express.js**](https://expressjs.com/) – ⚙️ A fast and minimalist Node.js web framework used to build robust RESTful APIs.
- [**Mongoose**](https://mongoosejs.com/) – 🧩 An elegant MongoDB object modeling tool for Node.js, providing schema-based solutions to model your application data and streamline database interactions.

## 🧪 Dev Dependencies

- [**dotenv**](https://www.npmjs.com/package/dotenv) – 🌱 Loads environment variables from a `.env` file into `process.env`, keeping sensitive config out of your code.
- [**nodemon**](https://nodemon.io/) – 🔁 Monitors your source files and restarts the server automatically on changes, speeding up development.

---

# 📚 Project Resources

### ⚙️ Node.js, Express, MongoDB

- 📘 [Node.js Official Docs](https://nodejs.org/en/docs)
- 🚀 [Express.js Guide](https://expressjs.com/en/starter/guide.html)
- 🍃 [MongoDB Documentation](https://www.mongodb.com/docs/)
- 🔗 [Mongoose Docs](https://mongoosejs.com/docs/)
