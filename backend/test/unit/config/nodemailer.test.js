// set fake env variables that nodemailer.js will read via loadEnv()
process.env.GMAIL_USER = "testuser@gmail.com";
process.env.GMAIL_PASS = "testpassword";

import { jest, beforeAll, it, expect } from "@jest/globals";

/* ------------------------------------------------------------------
   mock nodemailer **before** the module under test is imported
   - mockCreateTransport returns an object that contains the mockSendMail
   - this prevents any real smtp connection and lets us count calls
------------------------------------------------------------------- */
const mockSendMail = jest.fn(); // fake sendMail fn
const mockCreateTransport = jest.fn(() => ({ sendMail: mockSendMail }));

jest.unstable_mockModule("nodemailer", () => ({
  default: { createTransport: mockCreateTransport },
}));

/* ------------------------------------------------------------------
   dynamically import config/nodemailer.js after the mock is active
   - the file creates the transporter (uses our mock)
   - it also calls transporter.sendMail once at import-time
------------------------------------------------------------------- */
let transporter; // will hold export
beforeAll(async () => {
  transporter = (await import("../../../config/nodemailer.js")).default;
});

/* ------------------------------------------------------------------
   single happy-path test:
   1. createTransport called once with expected auth config
   2. sendMail invoked exactly once for the test email
   3. module exports the same mocked transporter object
------------------------------------------------------------------- */
it("creates a gmail transporter and calls sendMail once", () => {
  // verify transporter creation
  expect(mockCreateTransport).toHaveBeenCalledTimes(1);
  expect(mockCreateTransport).toHaveBeenCalledWith({
    service: "gmail",
    auth: { user: "testuser@gmail.com", pass: "testpassword" },
  });

  // verify the test email send on module load
  expect(mockSendMail).toHaveBeenCalledTimes(1);

  // exported transporter should expose the mocked sendMail
  expect(transporter.sendMail).toBe(mockSendMail);
});
