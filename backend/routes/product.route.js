import express from "express"; // importing express module
import mongoose from "mongoose"; // importing mongoose
import Product from "../models/product.model.js"; // importing the Product model

const router = express.Router(); // creating a new router object
// products GET:URL
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}); // fetching all products from the database
    res.status(200).json({ success: true, data: products }); // sending a response with status 200 (OK)
  } catch (error) {
    console.error("error in fetching products", error.message); // logging the error to the console
    res.status(500).json({ success: false, message: error.message }); // sending a response with status 500 (internal server error)
  }
}); // defining a route for the products URL

// products POST:URL
router.post("/", async (req, res) => {
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
router.put("/:id", async (req, res) => {
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
router.delete("/:id", async (req, res) => {
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
export default router; // exporting the router object
