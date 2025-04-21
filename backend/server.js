import express from "express"; // importing express
import { connectDB } from "./config/db.js"; // importing the connectDB function from the db.js file
import Product from "./models/product.model.js"; // importing the Product model from the product.model.js file

const app = express(); // creating an instance of express

app.use(express.json()); // middleware to parse JSON request bodies allows us to parse JSON request bodies

// root URL
app.get("/", (req, res) => {
  // defining a route for the root URL
  res.send("hello from node js!"); // sending a response to the client
}); // end of the route

// products URL
app.post("/api/products", async (req, res) => {
  const product = req.body; // getting the products from the request body

  // checking if the required fields are present
  if (!product.name || !product.price || !product.image) {
    res
      .status(400)
      .json({ success: false, message: "please fill all the fields" }); // sending a response with status 400 (bad request)
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save(); // saving the new product to the database
    res.status(201).json({ success: true, data: newProduct }); // sending a response with status 201 (created)
  } catch (error) {
    res.status(500).json({ success: false, message: error.message }); // sending a response with status 500 (internal server error)
  }
}); // defining a route for the products URL

app.listen(5000, () => {
  connectDB(); // calling the connectDB function to connect to the database
  // starting the server on port 5000
  console.log("server is running on port 5000  ->  http:localhost:5000 "); // logging to the console
}); // end of the server file
