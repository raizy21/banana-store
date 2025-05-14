/* backend/test/unit/controllers/productController.test.js
   unit tests for getProducts controller
   – test 1: happy-path success
   – test 2: failure path when Product.find throws
*/

import {
  jest,
  beforeAll,
  afterEach,
  it,
  expect,
  describe,
} from "@jest/globals";

//* ------------------------------------------------------------------
//   hijack console.error to prevent cluttering test output
//   - this is a common pattern for unit tests
//   - we restore the original behaviour in afterAll()
// ------------------------------------------------------------------ */
const consoleError = jest
  .spyOn(console, "error") // hijack console.error
  .mockImplementation(() => {}); // make it a no-op

afterAll(() => {
  consoleError.mockRestore(); // restore original behaviour
});

/* ------------------------------------------------------------------
   mock Product model with a mutable find() function
------------------------------------------------------------------ */
let mockFind; // will point to jest.fn()
jest.unstable_mockModule("../../../models/product.model.js", () => ({
  default: {
    // Product mock
    get find() {
      return mockFind;
    }, // getter so we can swap fn
  },
}));

/* ------------------------------------------------------------------
   import controller after mock is in place
------------------------------------------------------------------ */
let getProducts;
beforeAll(async () => {
  getProducts = (await import("../../../controllers/product.controller.js"))
    .getProducts;
});

/* helper to create fresh stub res object for each test */
const buildRes = () => ({
  status: jest.fn(function (code) {
    this._status = code;
    return this; // make chainable
  }),
  json: jest.fn(function (payload) {
    this._payload = payload;
  }),
});

afterEach(() => {
  jest.clearAllMocks();
});

describe("getProducts controller", () => {
  /* -----------------------------------------------------------
     test 1 – happy path: returns 200 with products array
  ----------------------------------------------------------- */
  it("returns 200 and list of products", async () => {
    const fakeProducts = [{ _id: "1", name: "banana phone" }];
    mockFind = jest.fn().mockResolvedValue(fakeProducts); // happy mock

    const req = {};
    const res = buildRes();

    await getProducts(req, res);

    expect(mockFind).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      success: true,
      data: fakeProducts,
    });
  });

  /* -----------------------------------------------------------
     test 2 – error path: Product.find throws -> responds 500
  ----------------------------------------------------------- */
  it("handles database error and returns 500", async () => {
    mockFind = jest.fn().mockRejectedValue(new Error("db fail")); // error mock

    const req = {};
    const res = buildRes();

    await getProducts(req, res);
    expect(consoleError).toHaveBeenCalledWith(
      "error in fetching products",
      "db fail"
    );
    expect(mockFind).toHaveBeenCalledTimes(1);
    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      success: false,
      message: "db fail",
    });
  });
});
