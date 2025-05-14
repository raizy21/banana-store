/* 

   unit-tests for the zustand product store

   – use vitest globals (vi, expect, it, beforeEach, afterEach)
   – stub global.fetch so no real network is touched
   – reset store state before each test to keep them isolated
*/

import { vi, expect, it, beforeEach, afterEach, describe } from "vitest";
import { useProductStore } from "../../src/store/product.js";

/* helper to restore the store to its initial state                      */
const resetStore = () => useProductStore.setState({ products: [] });

/* stub fetch will be re-assigned in each test                           */
let fetchSpy;

beforeEach(() => {
  resetStore();
  fetchSpy = vi.fn();
  globalThis.fetch = fetchSpy; // provide the stub on window/global
});

afterEach(() => {
  vi.clearAllMocks();
});

describe("zustand product store", () => {
  /* -----------------------------------------------------------
     test 1   setProducts mutates the products array
  ----------------------------------------------------------- */
  it("sets products array via setProducts", () => {
    const sample = [{ _id: "1", name: "banana", price: 1, image: "x" }];

    useProductStore.getState().setProducts(sample);

    expect(useProductStore.getState().products).toEqual(sample);
  });

  /* -----------------------------------------------------------
     test 2   createProduct returns error when required fields missing
  ----------------------------------------------------------- */
  it("createProduct returns failure when fields are missing", async () => {
    const { success, message } = await useProductStore
      .getState()
      .createProduct({}); // empty payload

    expect(success).toBe(false);
    expect(message).toBe("please fill all fields");
    expect(fetchSpy).not.toHaveBeenCalled(); // no network call
  });

  /* -----------------------------------------------------------
     test 3   successful createProduct updates state and calls fetch
  ----------------------------------------------------------- */
  it("creates product and pushes it into store", async () => {
    /* fake server response that the store expects */
    const serverProduct = {
      _id: "abc",
      name: "banana-phone",
      price: 99,
      image: "x",
    };

    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ data: serverProduct }),
    });

    const payload = { name: "banana-phone", price: 99, image: "x" };

    const result = await useProductStore.getState().createProduct(payload);

    /* verify result value */
    expect(result).toEqual({
      success: true,
      message: "product created successfully",
    });

    /* verify fetch call */
    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy.mock.calls[0][0]).toBe("/api/products");

    /* store should now contain the new item */
    expect(useProductStore.getState().products).toEqual([serverProduct]);
  });
});
