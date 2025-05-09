import mongoose from "mongoose";
import Product from "../../../models/product.js";

// connect to a test database before running tests
beforeAll(async () => {
  await mongoose.connect("mongodb://localhost:27017/banana-store-test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

// Clean up the database after each test
afterEach(async () => {
  await Product.deleteMany({});
});

// Disconnect from the test database after all tests
afterAll(async () => {
  await mongoose.connection.close();
});

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
  });

  it("should require a name, price, and image", async () => {
    const product = new Product({});

    try {
      await product.save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.name).toBeDefined();
      expect(error.errors.price).toBeDefined();
      expect(error.errors.image).toBeDefined();
    }
  });

  it("should fail if price is not a number", async () => {
    const productData = {
      name: "Banana Shield",
      price: "not-a-number",
      image: "https://example.com/banana-shield.jpg",
    };

    try {
      await new Product(productData).save();
    } catch (error) {
      expect(error).toBeInstanceOf(mongoose.Error.ValidationError);
      expect(error.errors.price).toBeDefined();
    }
  });
});
