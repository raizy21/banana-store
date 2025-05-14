import { expect, it, vi } from "vitest";

// mock each jpg import so no real image file is required
vi.mock("../../src/assets/banana-events.jpg", () => ({ default: "img0" }));
vi.mock("../../src/assets/banana-events1.jpg", () => ({ default: "img1" }));
vi.mock("../../src/assets/banana-events2.jpg", () => ({ default: "img2" }));
vi.mock("../../src/assets/banana-events3.jpg", () => ({ default: "img3" }));

// import the array after mocks are in place
import { imgBanannaArray } from "../../src/data/imageEventsBanana.js";

it("contains four image objects in correct order", () => {
  expect(imgBanannaArray).toHaveLength(4);
  expect(imgBanannaArray.map((o) => o.images)).toEqual([
    "img0",
    "img1",
    "img2",
    "img3",
  ]);
});
