import express from "express"; // importing express
import dotenv from "dotenv"; // importing dotenv
import { connectDB } from "./config/db.js"; // importing the connectDB function from the db.js file
import Product from "./models/product.model.js"; // importing the Product model from the product.model.js file
import mongoose from "mongoose"; // importing mongoose

dotenv.config(); // loading environment variables from the .env file
const app = express(); // creating an instance of express

app.use(express.json()); // middleware to parse JSON request bodies allows us to parse JSON request bodies

// root URL
app.get("/", (req, res) => {
  // defining a route for the root URL
  res.send("hello from node js!"); // sending a response to the client
}); // end of the route

// products GET:URL
app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find({}); // fetching all products from the database
    res.status(200).json({ success: true, data: products }); // sending a response with status 200 (OK)
  } catch (error) {
    console.error("error in fetching products", error.message); // logging the error to the console
    res.status(500).json({ success: false, message: error.message }); // sending a response with status 500 (internal server error)
  }
}); // defining a route for the products URL

// products POST:URL
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
    console.error("error in creating product", error.message); // logging the error to the console
    res.status(500).json({ success: false, message: error.message }); // sending a response with status 500 (internal server error)
  }
}); // defining a route for the products URL

// products PUT:URL
app.put("/api/products/:id", async (req, res) => {
  const { id } = req.params; // getting the product ID from the request parameters

  const product = req.body; // getting the products from the request body

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json({ success: false, message: "invalid product id" }); // sending a response with status 404 (not found)
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    }); // updating the product in the database using the ID
    res.status(200).json({ success: true, data: updatedProduct }); // sending a response with status 200 (OK)
  } catch (error) {
    console.error("error in updating product", error.message); // logging the error to the console
    res.status(500).json({ success: false, message: error.message }); // sending a response with status 500 (internal server error)
  }
}); // defining a route for the products URL

// products DELETE:URL
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params; // getting the product ID from the request parameters
  // console.log(id); // logging the product ID to the console

  try {
    await Product.findByIdAndDelete(id); // deleting the product from the database using the ID
    res.status(200).json({ success: true, message: "product deleted" }); // sending a response with status 200 (OK)
  } catch (error) {
    console.error("error in deleting product", error.message); // logging the error to the console
    res.status(404).json({ success: false, message: "product not found" }); // sending a response with status 404 (not found)
    // res.status(500).json({ success: false, message: error.message }); // sending a response with status 500 (internal server error)
  }
}); // deleting the product from the database

app.listen(5000, () => {
  connectDB(); // calling the connectDB function to connect to the database
  // starting the server on port 5000
  console.log("server is running on port 5000  ->  http:localhost:5000 "); // logging to the console
}); // end of the server file
