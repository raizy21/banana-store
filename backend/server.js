import express from "express"; // importing express
import { connectDB } from "./config/db.js"; // importing the connectDB function from the db.js file

const app = express(); // creating an instance of express

// root URL
app.get("/", (req, res) => {
  // defining a route for the root URL
  res.send("hello from node js!"); // sending a response to the client
}); // end of the route

// products URL
app.get("/products", (req, res) => {
  // defining a route for the /api URL
  res.json({ message: "products from node js!" }); // sending a JSON response to the client
}); // end of the route

app.listen(5000, () => {
  connectDB(); // calling the connectDB function to connect to the database
  // starting the server on port 5000
  console.log("server is running on port 5000  ->  http:localhost:5000 "); // logging to the console
}); // end of the server file
