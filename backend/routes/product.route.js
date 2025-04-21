import express from "express"; // importing express module
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js"; // importing the product controller functions

const router = express.Router(); // creating a new router object

// products GET:URL
router.get("/", getProducts); // defining a route for the products URL

// products POST:URL
router.post("/", createProduct); // defining a route for the products URL

// products PUT:URL
router.put("/:id", updateProduct); // defining a route for the products URL

// products DELETE:URL
router.delete("/:id", deleteProduct); // deleting the product from the database
export default router; // exporting the router object
