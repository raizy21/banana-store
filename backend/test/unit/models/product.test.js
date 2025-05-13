import mongoose from "mongoose";
import Product from "../../../models/email.model.js";

describe("Product Model", () => {
  it("should create a product with all required fields", async () => {
    const productData = {
      name: "Banana Phone",
      price: 99.99,
      image: "https://example.com/banana-phone.jpg",
    };

    const product = new Product(productData);
    const savedProduct = await product.save();

    expect(savedProduct._id).toBeDefined();
    expect(savedProduct.name).toBe(productData.name);
    expect(savedProduct.price).toBe(productData.price);
    expect(savedProduct.image).toBe(productData.image);
    expect(savedProduct.createdAt).toBeDefined();
    expect(savedProduct.updatedAt).toBeDefined();

    // Cleanup after test
    await Product.deleteOne({ _id: savedProduct._id });
  });
});
