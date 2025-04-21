import mongoose from "mongoose"; // importing mongoose to interact with MongoDB

const productSchema = mongoose.Schema(
  // defining the product schema using mongoose
  {
    name: {
      // defining the name field
      type: String,
      required: true,
    },
    price: {
      // defining the price field
      type: Number,
      required: true,
    },
    image: {
      // defining the image field
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // automatically add createdAt and updatedAt fields
  }
);

const Product = mongoose.model("Product", productSchema); // creating a model from the schema
export default Product; // exporting the model for use in other files
