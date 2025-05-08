<p align="center">
  <img src="/frontend/src/assets/logo.png" alt="Banana Store Logo"  width="120" style="margin-bottom: -50px;"/>
</p>

<h1 align="center">🍌 Banana Store</h1>

# 🛍️ Project Summary: Banana Store

The Banana Store is a full-stack project built with **Node.js**, **Express.js**, **MongoDB**, and **Nodemailer**.

It is designed to store and manage product data, as well as handle customer inquiries, including:

- 🗂️ Product information (name, price, image, timestamps)
- ✉️ Customer contact forms sent via email

This backend provides a clean and structured API for:

- **Managing product data** – CRUD operations for products stored in MongoDB
- **Sending customer messages** – Securely sending form data via Gmail SMTP using Nodemailer

---

> **ℹ️ Note:**  
> This project uses **Gmail App Passwords** for secure email sending. Be sure to configure your `.env` file correctly to avoid login errors.

### 👥 Contributions

- 👨‍💻 [Andrei](https://github.com/raizy21)

_Is maintainers for this repository._

---

## 🚀 Deployment

### 🧠 Backend & 🖥️ Frontend (Combined)

Both the backend and frontend are deployed on the same Render domain.

🌍 **Live App (Render)**:  
🔗 [https://banana-store.onrender.com](https://banana-store.onrender.com)

🧪 **Backend API Route (served from port `5000`)**:  
`/api/product`

📦 **GitHub Repository**:  
🔗 [https://github.com/raizy21/banana-store](https://github.com/raizy21/banana-store)

---

# 🧰 Key Technologies

- ⚙️ **Backend**: [Node.js](https://nodejs.org/en/) + [Express.js](https://expressjs.com/) – RESTful API server for managing store data
- 📬 **Email Service**: [Nodemailer](https://nodemailer.com/about/) – Used to send user-submitted form data (e.g., product inquiries) to your Gmail inbox securely via SMTP
- 🗃️ **Database**: [MongoDB](https://www.mongodb.com/) – NoSQL database for storing product information
- 🍃 **ODM**: [Mongoose](https://mongoosejs.com/) – MongoDB object modeling tool for schema and queries

- ⚛️ **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) – Fast SPA setup with modern React (v19)
- 🎨 **UI Library**: [Chakra UI](https://chakra-ui.com/) – Accessible and flexible component-based design system
- 🎞️ **Animation**: [Framer Motion](https://www.framer.com/motion/) – Declarative animations for React components

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

### 🔐 Environment Variables

The backend uses environment variables stored in a `.env` file located in the `backend/` directory. Make sure to create this file before running the project.

#### Example `.env` file:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/banana-store
PORT=5000
GMAIL_USER=andrei.dev.freelancer@gmail.com
GMAIL_PASS=key generated for nodemailer from gmail
```

## 🚀 Running the Server

To start the server, run the following command:

```bash
npm run dev
```

🌐 The server will start running at [http://localhost:5000](http://localhost:5000)

---

### 🎨 Frontend Setup (Vite + React)

The frontend is initialized using **[Vite](https://vitejs.dev/)** with **React** for a fast and modern development experience.

The frontend development server runs on:  
**`http://localhost:3000`**

---

### 🗂️ Project Structure

The Banana Store is a full-stack application structured into two main parts: a **backend** powered by Node.js, Express, and MongoDB, and a **frontend** built with React.

```
banana-store/

├── frontend/ # frontend (React)
│ ├── dist/ # production build output (auto-generated)
│ ├── node_modules/ # frontend dependencies (auto-generated)
│ ├── public/ # static public assets
│ ├── src/ # react source code (components, pages, etc.)
│ ├── └── assets/ # static images and styles
│ ├── └── components/ # reusable UI components and components for UI
│ ├── └── data/ # static json, constants, and mock data
│ ├── └── layouts/ # common page layouts (e.g., headers, footers)
│ ├── └── store/ # global state management (e.g., zustand)
│ ├── └──pages/ # full pages with route-level components
│ ├── └── App.jsx # react app entry point with routs and main layout
│ ├── └── main.jsx # react app entry point
│ ├── .gitignore # files/folders to ignore in Git
│ ├── eslint.config.js # eslint configuration
│ ├── index.html # html template used by Vite
│ ├── package.json # frontend dependencies and scripts
│ ├── package-lock.json # exact dependency versions
│ ├── vite.config.js # Vite configuration file
├── backend/ # backend source code (Node.js + Express)
│ ├── config/ # MongoDB connection setup (e.g., db.js)
│ ├── controllers/ # route logic and request handling (e.g., product.controller.js)
│ ├── models/ # Mongoose models for MongoDB (e.g., product.model.js)
│ ├── routes/ # Express route definitions (e.g., product.route.js)
│ ├── utils/  # Utility modules (e.g., sendEmail.js for mailing logic, envLoader.js for dotenv config)
│ └── server.js # Main entry point for the backend server
├── node_modules/ # node.js dependencies (auto-generated)
├── .env # environment variables (e.g., MONGO_URI)
├── .gitignore # ignored files and folders for Git
├── logo.png   # logo for this app
├── package-lock.json # exact version lock for installed dependencies
├── package.json # project metadata, dependencies, and scripts
├── README.md # project documentation (this file)
```

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

### 📦 Models

All data models are defined in the `models/` folder using [Mongoose](https://mongoosejs.com/).

Example: **Product Model** (`models/Product.js`)

```js
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
```

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

### 📬 Send an Email Inquiry

> **[POST]** `/api/email/send` – _Send a contact form inquiry via Nodemailer to a Gmail inbox_

This endpoint sends a structured email containing user-submitted form data using `nodemailer`. It uses Gmail's SMTP service and requires a valid App Password to authenticate the request.

---

#### 🧾 Request Body

```json
{
  "firstName": "andrei",
  "secondName": "razvan",
  "email": "abc@email.com",
  "phone": "0123456789",
  "message": "i am a banana",
  "plan": "premium"
}
```

#### ✅ Success Response

- **Status Code:** `200 OK`
- **Content-Type:** `application/json`

```json
{
  "message": "email sent successfully",
  "result": {
    "accepted": ["andrei.dev.freelancer@gmail.com"],
    "rejected": [],
    "envelope": {
      "from": "abc@email.com",
      "to": ["andrei.dev.freelancer@gmail.com"]
    },
    "response": "250 2.0.0 OK ... - gsmtp",
    "messageId": "<...@email.com>"
  }
}
```

#### 🔧 Under the Hood

- This endpoint uses [**Nodemailer**](https://nodemailer.com/about/) with Gmail's SMTP.
- Email credentials are securely loaded using `dotenv` (`GMAIL_USER`, `GMAIL_PASS`).
- Logic is handled in `utils/sendEmail.js` and routed through `controllers/emailController.js`.

---

# 🗃️ Database

I use [🍃 MongoDB](https://www.mongodb.com/) as database solution.

🛠️ My data is stored in collections rather than tables, and I manage the schema and connection using [Mongoose](https://mongoosejs.com/).

### 🍃 Database: MongoDB

This project uses **MongoDB** to store product information in a `products` collection. Each document represents a product available in the Banana Store, including fields for name, price, image, and timestamps.

---

#### 🗂️ Example Collection: `products`

Each document follows this structure:

```json
{
  "_id": "68146319d0ae30a640bc739d",
  "name": "banana cut",
  "price": 21.21,
  "image": "https://plus.unsplash.com/premium_photo-1664304188646-47b168d698aa?w=600",
  "createdAt": "2025-05-02T06:15:53.419Z",
  "updatedAt": "2025-05-02T06:15:53.419Z",
  "__v": 0
}
```

---

## 📦 Dependencies

---

### frontend

- [**React**](https://react.dev/) – ⚛️ A modern library for building interactive UIs using components.
- [**React DOM**](https://react.dev/reference/react-dom) – 🌍 Provides DOM-specific methods to render React components.
- [**@chakra-ui/react**](https://chakra-ui.com/docs) – 🎨 A modern React component library for building accessible and themeable UIs.
- [**@emotion/react**](https://emotion.sh/docs/introduction) – 💅 A powerful library for writing CSS styles with JavaScript.
- [**@emotion/styled**](https://emotion.sh/docs/styled) – 🎯 Styled component API built on Emotion.
- [**Framer Motion**](https://www.framer.com/motion/) – 🎞️ Production-ready animations and gestures for React.
- [**React Router DOM**](https://reactrouter.com/en/main) – 🧭 Declarative routing for React web apps with support for nested routes and dynamic segments.
- [**React Icons**](https://react-icons.github.io/react-icons/) – 💠 A comprehensive icon library wrapper that includes Font Awesome, Material Design, Feather, and many others, easily used in React apps.
- [**@chakra-ui/icons**](https://chakra-ui.com/docs/components/icon/usage#chakra-uiicons) – 🔆 A set of Chakra UI-compatible SVG icon components for consistent iconography.
- [**Zustand**](https://zustand-demo.pmnd.rs/) – 🐻 A small, fast, and scalable state-management library for React applications with a minimalistic API.
- [**@chakra-ui/icons**](https://chakra-ui.com/docs/components/icon/usage#chakra-uiicons) – 🔆 A set of Chakra UI-compatible SVG icon components for consistent iconography.

---

### backend

- [**Express.js**](https://expressjs.com/) – ⚙️ A fast and minimalist Node.js web framework used to build robust RESTful APIs.
- [**Mongoose**](https://mongoosejs.com/) – 🧩 An elegant MongoDB object modeling tool for Node.js, providing schema-based solutions to model your application data and streamline database interactions.

## 🧪 Dev Dependencies

---

### frontend

- [**Vite**](https://vitejs.dev/) – ⚡ A fast build tool and dev server optimized for modern frontend frameworks like React.
- [**@vitejs/plugin-react**](https://vitejs.dev/guide/#react) – 🔄 Adds React Fast Refresh and JSX support to Vite.
- [**ESLint**](https://eslint.org/) – 🧼 A pluggable linter tool for identifying and fixing problems in your JavaScript code.
- [**@eslint/js**](https://www.npmjs.com/package/@eslint/js) – 🧠 Base configuration for ESLint’s core rules.
- [**eslint-plugin-react-hooks**](https://www.npmjs.com/package/eslint-plugin-react-hooks) – 🔍 Linting rules for React hooks.
- [**eslint-plugin-react-refresh**](https://www.npmjs.com/package/eslint-plugin-react-refresh) – 🔄 ESLint plugin for React Fast Refresh development.
- [**@types/react**](https://www.npmjs.com/package/@types/react) – 📘 TypeScript types for React.
- [**@types/react-dom**](https://www.npmjs.com/package/@types/react-dom) – 📘 TypeScript types for ReactDOM.
- [**globals**](https://www.npmjs.com/package/globals) – 🌐 A set of global variable definitions for ESLint environments.
- [**Chakra UI Toast**](https://chakra-ui.com/docs/components/toast) – 🔔 A simple, customizable notification system for showing feedback messages in your app using Chakra UI’s `useToast` hook.
- [**@testing-library/react**](https://testing-library.com/docs/react-testing-library/intro/) – 🧪 Lightweight testing utilities for testing React components.
- [**@testing-library/jest-dom**](https://testing-library.com/docs/ecosystem-jest-dom/) – 📏 Custom Jest matchers for asserting DOM nodes.
- [**vitest**](https://vitest.dev/) – 🧪 A blazing fast unit test framework built on Vite.

---

### backend

- [**dotenv**](https://www.npmjs.com/package/dotenv) – 🌱 Loads environment variables from a `.env` file into `process.env`, keeping sensitive config out of your code.
- [**nodemon**](https://nodemon.io/) – 🔁 Monitors your source files and restarts the server automatically on changes, speeding up development.
- [**cross-env**](https://www.npmjs.com/package/cross-env) – 🌎 Allows you to set environment variables across different platforms (Windows, macOS, Linux) in a consistent way.
- [**cors**](https://www.npmjs.com/package/cors) – 🛡️ Enables [CORS (Cross-Origin Resource Sharing)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), allowing your frontend (e.g., running on `localhost:3000`) to communicate securely with your backend (e.g., Express server on `localhost:5000`). This is essential for handling API requests across different domains or ports during development and deployment.
- [**nodemailer**](https://www.npmjs.com/package/nodemailer) – 📬 A module for Node.js applications to send emails using SMTP. Used in this project to send user-submitted forms directly to your Gmail inbox via secure configuration and app passwords.
- [**jest**](https://jestjs.io/) – 🧪 A comprehensive testing framework with built-in assertions, mocking, and coverage tools.
- [**supertest**](https://github.com/visionmedia/supertest) – 📮 A library for testing HTTP APIs with great integration for Express.js.
- [**@babel/core**](https://babeljs.io/docs/en/babel-core) – 🛠️ The core library for Babel, responsible for transforming your modern JavaScript into compatible versions.
- [**@babel/preset-env**](https://babeljs.io/docs/en/babel-preset-env) – 🧪 A smart preset that allows you to use the latest JavaScript features without worrying about browser support.
- [**babel-jest**](https://www.npmjs.com/package/babel-jest) – 🔄 A Jest transformer that uses Babel to compile your ES modules and modern JavaScript.

---

# 📚 Project Resources

### ⚛️ Frontend Technologies

- 🌀 [Vite Documentation](https://vitejs.dev/guide/) – Modern build tool that delivers fast development and optimized builds.
- ⚛️ [React Docs (v19)](https://react.dev/) – Official documentation for building UIs with React.
- 🎨 [Chakra UI Docs](https://chakra-ui.com/docs) – Documentation for building accessible component-based UIs.
- 💥 [Framer Motion Docs](https://www.framer.com/motion/) – Declarative animations and motion in React.

---

### 🛠️ Frontend Dev Tools

- 🧪 [ESLint](https://eslint.org/) – Static code analysis tool to catch errors early and enforce best practices.
- 🚦 [TypeScript Types (React)](https://www.npmjs.com/package/@types/react) – Type safety for React development.
- ⚙️ [Vite Config Guide](https://vitejs.dev/config/) – Configuration guide for customizing your Vite setup.

---

### ⚙️ Core Technologies

- 📘 [Node.js Official Docs](https://nodejs.org/en/docs) – JavaScript runtime built on Chrome’s V8 engine
- 🚀 [Express.js Guide](https://expressjs.com/en/starter/guide.html) – fast and minimalist web framework for Node.js
- 🍃 [MongoDB Documentation](https://www.mongodb.com/docs/) – NoSQL database used to store products and more
- 🔗 [Mongoose Docs](https://mongoosejs.com/docs/) – elegant MongoDB object modeling for Node.js

---

### 🛠️ Developer Tools

- 🔁 [Nodemon](https://www.npmjs.com/package/nodemon) – auto-restarts the server on code changes during development
- 🔐 [dotenv](https://www.npmjs.com/package/dotenv) – loads environment variables from a `.env` file into `process.env`
- 📦 [npm (Node Package Manager)](https://docs.npmjs.com/) – dependency management tool for Node.js

---

### 🌐 CORS Integration & Resources

- 🛡️ [CORS NPM Package](https://www.npmjs.com/package/cors) – Official npm package page.
- 📘 [CORS on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) – In-depth explanation of how CORS works in browsers.
- 🧩 [CORS GitHub Repository](https://github.com/expressjs/cors) – Source code and issues for the middleware.

---

### 💌 Email Functionality

- 📬 [Nodemailer Docs](https://nodemailer.com/about/) – Official documentation for configuring and using Nodemailer in your backend.
- 🔐 [Google App Password Guide](https://support.google.com/accounts/answer/185833?hl=en) – Required for securely sending email via Gmail SMTP.
- 🧪 [Nodemailer GitHub](https://github.com/nodemailer/nodemailer) – Source code, examples, and issue tracking.

---

### 🛠️ Backend Dev Tools

- 🧪 [Jest Docs](https://jestjs.io/docs/getting-started) – Comprehensive guide to testing with Jest.
- 📮 [Supertest GitHub](https://github.com/visionmedia/supertest) – Source code and examples for testing Express apps.
- 🛠️ [Babel Docs](https://babeljs.io/docs/en/) – Official documentation for configuring Babel and transforming your code.

---

### 🧪 Testing & Debugging

- 🧪 [Postman](https://www.postman.com/) – powerful tool for testing your API endpoints
- 🐞 [MongoDB Compass](https://www.mongodb.com/products/compass) – GUI for interacting with your MongoDB database
- 🧪 [Testing Library Docs](https://testing-library.com/) – Official documentation for testing React components.
- 🧪 [Jest Docs](https://jestjs.io/docs/getting-started) – Comprehensive guide to testing with Jest.
- 📮 [Supertest GitHub](https://github.com/visionmedia/supertest) – Source code and examples for testing Express apps.
