import express from "express"; // importing express
import dotenv from "dotenv"; // importing dotenv
import { connectDB } from "./config/db.js"; // importing the connectDB function from the db.js file
import productRoutes from "./routes/product.route.js"; // importing the product routes

dotenv.config(); // loading environment variables from the .env file
const app = express(); // creating an instance of express

app.use(express.json()); // middleware to parse JSON request bodies allows us to parse JSON request bodies

// root URL
app.get("/", (req, res) => {
  // defining a route for the root URL
  res.send("hello from node js!"); // sending a response to the client
}); // end of the route

app.use("/api/products", productRoutes); // using the product routes for the /api/products URL

app.listen(5000, () => {
  connectDB(); // calling the connectDB function to connect to the database
  // starting the server on port 5000
  console.log("server is running on port 5000  ->  http:localhost:5000 "); // logging to the console
}); // end of the server file
