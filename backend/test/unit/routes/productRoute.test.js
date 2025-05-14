/* integration-style unit tests for product.route.js

   – each controller is mocked so no database work occurs
   – supertest hits every HTTP verb and asserts:
       • correct status code
       • correct mock called exactly once
*/

import {
  jest,
  beforeAll,
  afterEach,
  describe,
  it,
  expect,
} from "@jest/globals";
import express from "express";
import request from "supertest";

/* ---------------------------------------------------------
   1. create jest mocks for every controller function
---------------------------------------------------------- */
const mockGet = jest.fn((req, res) => res.status(200).json({ ok: "get" }));
const mockPost = jest.fn((req, res) => res.status(201).json({ ok: "post" }));
const mockPut = jest.fn((req, res) => res.status(200).json({ ok: "put" }));
const mockDelete = jest.fn((req, res) =>
  res.status(200).json({ ok: "delete" })
);

jest.unstable_mockModule("../../../controllers/product.controller.js", () => ({
  getProducts: mockGet,
  createProduct: mockPost,
  updateProduct: mockPut,
  deleteProduct: mockDelete,
}));

/* ---------------------------------------------------------
   2. import router after controller mocks are registered,
      then mount it on a minimal express app
---------------------------------------------------------- */
const productRouter = (await import("../../../routes/product.route.js"))
  .default;

const app = express();
app.use(express.json());
app.use("/api/products", productRouter);

/* ---------------------------------------------------------
   3. reset call counts between tests
---------------------------------------------------------- */
afterEach(() => jest.clearAllMocks());

/* ---------------------------------------------------------
   4. tests for each verb
---------------------------------------------------------- */
describe("product routes", () => {
  it("GET /api/products → calls getProducts and returns 200", async () => {
    await request(app).get("/api/products").expect(200, { ok: "get" });
    expect(mockGet).toHaveBeenCalledTimes(1);
  });

  it("POST /api/products → calls createProduct and returns 201", async () => {
    await request(app)
      .post("/api/products")
      .send({ name: "banana", price: 1, image: "x" })
      .expect(201, { ok: "post" });
    expect(mockPost).toHaveBeenCalledTimes(1);
  });

  it("PUT /api/products/123 → calls updateProduct and returns 200", async () => {
    await request(app)
      .put("/api/products/123")
      .send({ price: 2 })
      .expect(200, { ok: "put" });
    expect(mockPut).toHaveBeenCalledTimes(1);
  });

  it("DELETE /api/products/123 → calls deleteProduct and returns 200", async () => {
    await request(app)
      .delete("/api/products/123")
      .expect(200, { ok: "delete" });
    expect(mockDelete).toHaveBeenCalledTimes(1);
  });
});
