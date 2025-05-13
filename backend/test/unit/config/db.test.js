/* unit-test for connectDB() in config/db.js

   strategy
   --------
   1. set a fake MONGO_URI env var so connectDB has something to read
   2. mock mongoose.connect so no real connection is attempted
   3. import connectDB dynamically (after the mock is in place)
   4. call connectDB and assert mongoose.connect was invoked once
*/

import { jest, beforeAll, afterEach, it, expect } from "@jest/globals";

/* -------------------------------------------------------------
   1. set a dummy connection string for the test environment
-------------------------------------------------------------- */
process.env.MONGO_URI = "mongodb://localhost:27017/test-db";

/* -------------------------------------------------------------
   2. create a jest mock for mongoose.connect
      – resolve with an object that looks like what the real call
        returns (it only needs connection.host for the console.log)
-------------------------------------------------------------- */
const mockConnect = jest.fn().mockResolvedValue({
  connection: { host: "localhost" },
});
jest.unstable_mockModule("mongoose", () => ({
  default: { connect: mockConnect },
}));

/* -------------------------------------------------------------
   3. dynamically import the module under test after the mock
-------------------------------------------------------------- */
let connectDB;
beforeAll(async () => {
  connectDB = (await import("../../../config/db.js")).connectDB;
});

/* -------------------------------------------------------------
   4. reset the mock after each test to keep call counts clean
-------------------------------------------------------------- */
afterEach(() => {
  mockConnect.mockClear();
});

/* -------------------------------------------------------------
   5. single happy-path test
-------------------------------------------------------------- */
it("calls mongoose.connect with MONGO_URI", async () => {
  await connectDB(); // invoke the function
  expect(mockConnect).toHaveBeenCalledTimes(1);
  expect(mockConnect).toHaveBeenCalledWith(process.env.MONGO_URI);
});
