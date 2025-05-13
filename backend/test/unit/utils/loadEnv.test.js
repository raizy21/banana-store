/* ---------------------------------------------------------------
   set NODE_ENV to "test" so utils/loadEnv.js will load .env.test
   (this must come before the module is imported)
---------------------------------------------------------------- */
process.env.NODE_ENV = "test";

/* ---------------------------------------------------------------
   import the function under test
---------------------------------------------------------------- */
import { loadEnv } from "../../../utils/loadEnv.js";

describe("loadEnv()", () => {
  /* -------------------------------------------------------------
     before each test, clear any existing vars so we know exactly
     what loadEnv puts into process.env
  -------------------------------------------------------------- */
  beforeEach(() => {
    delete process.env.GMAIL_USER;
    delete process.env.GMAIL_PASS;
  });

  /* -------------------------------------------------------------
     test: after calling loadEnv() we expect GMAIL_USER to equal
     the value defined in .env.test
  -------------------------------------------------------------- */
  it("loads variables from .env.test", () => {
    loadEnv(); // run loader
    expect(process.env.GMAIL_USER) // assert value
      .toBe("andrei.dev.freelancer@gmail.com");
  });

  /* -------------------------------------------------------------
     test: calling loadEnv() should not throw an error even if the
     file is missing or already loaded
  -------------------------------------------------------------- */
  it("does not throw", () => {
    expect(() => loadEnv()).not.toThrow(); // no exception
  });
});
