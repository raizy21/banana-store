import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import Product from "../../../models/product.model.js";

let mongo;

/* start an in-memory mongodb instance before the entire test suite
   - mongodb-memory-server spins up a throw-away server on a random port
   - we connect mongoose to that URI so every db call is completely isolated
   - tests become fast and deterministic; no local mongo install required */
beforeAll(async () => {
  mongo = await MongoMemoryServer.create(); // create server
  await mongoose.connect(mongo.getUri(), { dbName: "jest" }); // open connection
});

/* remove all Product documents after each test case
   - guarantees a clean collection for the next test
   - avoids flaky tests that depend on leftover data */
afterEach(async () => {
  await Product.deleteMany({});
});

/* shut everything down after the last test
   - close mongoose connection to release sockets
   - stop the in-memory mongo process to free resources */
afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

describe("product model", () => {
  /* happy-path: saving a valid document should succeed and
     mongoose should populate default fields (_id, timestamps) */
  it("creates a product with required fields", async () => {
    // sample payload that matches schema requirements
    const data = {
      name: "Banana Phone",
      price: 99.99,
      image: "https://example.com/banana-phone.jpg",
    };

    // persist to the temporary database
    const saved = await new Product(data).save();

    // verify that mongoose generated an _id and echoed back the same values
    expect(saved._id).toBeDefined(); // _id is automatically added
    expect(saved.name).toBe(data.name); // name field matches
    expect(saved.price).toBe(data.price); // price field matches
    expect(saved.image).toBe(data.image); // image field matches
    expect(saved.createdAt).toBeDefined(); // createdAt is automatically added
    expect(saved.updatedAt).toBeDefined(); // updatedAt is automatically added
  });
});
