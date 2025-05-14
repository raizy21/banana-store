/*
   supertest integration test for the /api/email/send route
   – mounts the router on a throw-away express app
   – mocks the controller so no real mail is sent
*/

import request from "supertest";
import express from "express";
import { jest } from "@jest/globals";

/* -------------------------------------------------------------
   1. mock the controller so it responds with 200 instantly
-------------------------------------------------------------- */
const mockSendEmail = jest.fn((req, res) =>
  res.status(200).json({ success: true })
);
jest.unstable_mockModule("../../../controllers/emailController.js", () => ({
  sendEmailController: mockSendEmail,
}));

/* -------------------------------------------------------------
   2. import the router after controller mock is in place
-------------------------------------------------------------- */
const emailRouter = (await import("../../../routes/emailRoutes.js")).default;

/* -------------------------------------------------------------
   3. create a minimal express app that mounts the email router
-------------------------------------------------------------- */
const app = express();
app.use(express.json());
app.use("/api/email", emailRouter);

/* -------------------------------------------------------------
   4. integration test: POST /api/email/send returns 200
-------------------------------------------------------------- */
it("returns 200 on successful post to /api/email/send", async () => {
  await request(app)
    .post("/api/email/send")
    .send({
      firstName: "john",
      secondName: "doe",
      email: "john@example.com",
      phone: "123",
      message: "hi",
      plan: "basic",
    })
    .expect(200)
    .expect({ success: true });

  /* verify controller invoked exactly once */
  expect(mockSendEmail).toHaveBeenCalledTimes(1);
});
