// tell loadEnv to use .env.test
process.env.NODE_ENV = "test";

import { loadEnv } from "../../../utils/loadEnv.js";

describe("loadEnv()", () => {
  beforeEach(() => {
    delete process.env.GMAIL_USER;
    delete process.env.GMAIL_PASS;
  });

  it("loads variables from .env.test", () => {
    loadEnv();
    expect(process.env.GMAIL_USER).toBe("andrei.dev.freelancer@gmail.com");
  });

  it("does not throw", () => {
    expect(() => loadEnv()).not.toThrow();
  });
});
