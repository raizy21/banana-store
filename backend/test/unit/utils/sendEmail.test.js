/***************************************************************
 * sendEmail.test.js – thoroughly commented unit-test
 *
 * goal  ➜  prove that utils/sendEmail.js calls nodemailer’s
 *           transporter.sendMail exactly **once**.
 *
 * technique ➜  1) replace (“mock”) the real transporter module
 *                 before it is imported.
 *              2) import sendEmail dynamically (so it sees the mock).
 *              3) call sendEmail with dummy data.
 *              4) assert the mock was invoked one time.
 *
 ***************************************************************/

import { jest, expect, it, beforeAll } from "@jest/globals";

/* ------------------------------------------------------------------
   create a jest mock for transporter.sendMail
   ------------------------------------------------------------------
   - jest.fn()            ➜ makes a fake function jst can track.
   - mockResolvedValue()  ➜ pretend sendMail resolves successfully
                            with the given object.
------------------------------------------------------------------ */
const mockSendMail = jest
  .fn()
  .mockResolvedValue({ accepted: ["receiver@test.com"] });

/* ------------------------------------------------------------------
    swap out the real module BEFORE sendEmail.js is imported
   ------------------------------------------------------------------
   - jest.unstable_mockModule(modulePath, factory)
     tells jest: “whenever a file imports that path, give them this
     mocked version instead of the real one.”
   - we return { default: { sendMail: mockSendMail } } because
     utils/sendEmail.js does:
           import transporter from "../config/nodemailer.js";
     …and expects transporter to have a .sendMail method.
------------------------------------------------------------------ */
jest.unstable_mockModule("../../../config/nodemailer.js", () => ({
  default: { sendMail: mockSendMail },
}));

/* ------------------------------------------------------------------
   dynamically import utils/sendEmail.js AFTER the mock is set
   ------------------------------------------------------------------
   - dynamic import (await import()) ensures the file is evaluated
     only after our mockModule call above is registered.
   - we also put a fake GMAIL_USER into process.env so the function
     can build its mailOptions without reading a real .env file.
------------------------------------------------------------------ */
let sendEmail;
beforeAll(async () => {
  process.env.GMAIL_USER = "receiver@test.com"; // dummy env var
  sendEmail = (await import("../../../utils/sendEmail.js")).default;
});

/* ------------------------------------------------------------------
    the single, simple assertion
   ------------------------------------------------------------------
   - call sendEmail with arbitrary data.
   - jest records every call made to mockSendMail.
   - expect(mockSendMail).toHaveBeenCalledTimes(1) passes only if
     sendEmail triggered exactly one SMTP send.
------------------------------------------------------------------ */
it("calls transporter.sendMail once", async () => {
  await sendEmail({
    firstName: "A",
    secondName: "B",
    email: "a@b.com",
    phone: "123",
    message: "hi",
    plan: "basic",
  });

  // assertion: transporter.sendMail called exactly once
  expect(mockSendMail).toHaveBeenCalledTimes(1);
});
