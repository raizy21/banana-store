/*  unit-test for Email mongoose model
    – spins up an in-memory MongoDB so no local instance is needed
    – verifies a valid document saves and fields are stored correctly */

import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import Email from "../../../models/email.model.js"; // model under test

let mongo; // will hold the in-memory server instance

/* -----------------------------------------------------------
   start an in-memory mongodb before running the test suite
   ----------------------------------------------------------- */
beforeAll(async () => {
  mongo = await MongoMemoryServer.create(); // create tmp server
  await mongoose.connect(mongo.getUri(), { dbName: "jest" }); // connect mongoose
});

/* -----------------------------------------------------------
   clean the Email collection after every individual test
   ----------------------------------------------------------- */
afterEach(async () => {
  await Email.deleteMany({});
});

/* -----------------------------------------------------------
   shut down connection + server after the suite finishes
   ----------------------------------------------------------- */
afterAll(async () => {
  await mongoose.disconnect();
  await mongo.stop();
});

describe("email model", () => {
  it("creates an email document with required fields", async () => {
    /* payload that meets the schema rules */
    const payload = {
      firstName: "andrei",
      secondName: "razvan",
      email: "andrei@example.com",
      phone: "1234567890",
      message: "banana tests",
      plan: "basic",
    };

    /* save to database */
    const saved = await new Email(payload).save();

    /* assertions: mongoose returns the same values + generated _id */
    expect(saved._id).toBeDefined(); // _id created
    expect(saved.firstName).toBe(payload.firstName);
    expect(saved.secondName).toBe(payload.secondName);
    expect(saved.email).toBe(payload.email);
    expect(saved.phone).toBe(payload.phone);
    expect(saved.message).toBe(payload.message);
    expect(saved.plan).toBe(payload.plan);
    expect(saved.createdAt).toBeDefined(); // timestamps present
    expect(saved.updatedAt).toBeDefined();
  });
});
