/* simple happy-path unit test for sendEmailController
   – mocks Email.create and transporter.sendMail
   – verifies res.status(200).json(...) is called once */

import { jest, beforeAll, it, expect } from "@jest/globals";

/* -------------------------------------------------------------
   1. mock dependencies before importing the controller
-------------------------------------------------------------- */
const fakeSavedEmail = { _id: "1", firstName: "a" };
const mockCreate = jest.fn().mockResolvedValue(fakeSavedEmail);
jest.unstable_mockModule("../../../models/email.model.js", () => ({
  default: { create: mockCreate },
}));

const fakeInfo = { accepted: ["receiver@test.com"] };
const mockSendMail = jest.fn().mockResolvedValue(fakeInfo);
jest.unstable_mockModule("../../../config/nodemailer.js", () => ({
  default: { sendMail: mockSendMail },
}));

/* -------------------------------------------------------------
   2. import controller after mocks are ready
-------------------------------------------------------------- */
let sendEmailController;
beforeAll(async () => {
  sendEmailController = (
    await import("../../../controllers/emailController.js")
  ).sendEmailController;
});

/* -------------------------------------------------------------
   3. prepare stub req / res objects
-------------------------------------------------------------- */
const req = {
  body: {
    firstName: "john",
    secondName: "doe",
    email: "john@example.com",
    phone: "123",
    message: "hi",
    plan: "basic",
  },
};

const res = {
  status: jest.fn(() => res), // chainable
  json: jest.fn(),
};

/* -------------------------------------------------------------
   4. simple happy-path assertion
-------------------------------------------------------------- */
it("responds 200 and saves + sends email", async () => {
  await sendEmailController(req, res);

  // model create called with request body values
  expect(mockCreate).toHaveBeenCalledWith(req.body);

  // transporter called exactly once
  expect(mockSendMail).toHaveBeenCalledTimes(1);

  // res methods called with success payload
  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalledWith({
    message: "email sent successfully",
    info: fakeInfo,
    savedEmail: fakeSavedEmail,
  });
});
