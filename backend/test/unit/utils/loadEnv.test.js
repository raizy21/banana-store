// import { loadEnv } from "../../../utils/loadEnv.js"; // importing the loadEnv function to be tested

// describe("loadEnv", () => {
//   it("should load environment variables from .env file", () => {
//     // clear any existing environment variables
//     delete process.env.GMAIL_USER;
//     delete process.env.GMAIL_PASS;

//     // call the loadEnv function
//     loadEnv();

//     // check if the environment variables are loaded correctly
//     expect(process.env.GMAIL_USER).toBeDefined();
//     expect(process.env.GMAIL_PASS).toBeDefined();
//   });

//   it("should not throw any error when loading .env", () => {
//     expect(() => loadEnv()).not.toThrow();
//   });
// });
