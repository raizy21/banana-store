import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import Product from "../../../models/product.model.js";

let mongo;

/** start in-memory MongoDB before the suite */
beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  await mongoose.connect(mongo.getUri(), { dbName: "jest" });
});

/** clean collection after each test */
afterEach(async () => {
  await Product.deleteMany({});
});

/** stop DB and close Mongoose after all tests */
afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

describe("Product Model", () => {
  it("creates a product with required fields", async () => {
    const data = {
      name: "Banana Phone",
      price: 99.99,
      image: "https://example.com/banana-phone.jpg",
    };

    const saved = await new Product(data).save();

    expect(saved._id).toBeDefined();
    expect(saved.name).toBe(data.name);
    expect(saved.price).toBe(data.price);
    expect(saved.image).toBe(data.image);
  });
});
