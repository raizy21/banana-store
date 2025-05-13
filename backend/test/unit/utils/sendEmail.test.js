import { jest, expect, it, beforeAll } from "@jest/globals";

/* --- mock transporter BEFORE importing sendEmail ------------------- */
const mockSendMail = jest
  .fn()
  .mockResolvedValue({ accepted: ["receiver@test.com"] });
jest.unstable_mockModule("../../../config/nodemailer.js", () => ({
  default: { sendMail: mockSendMail },
}));

/* --- import sendEmail after the mock is in place ------------------- */
let sendEmail;
beforeAll(async () => {
  process.env.GMAIL_USER = "receiver@test.com"; // fake env for test
  sendEmail = (await import("../../../utils/sendEmail.js")).default;
});

/* --- single, simple test ------------------------------------------- */
it("calls transporter.sendMail once", async () => {
  await sendEmail({
    firstName: "A",
    secondName: "B",
    email: "a@b.com",
    phone: "123",
    message: "hi",
    plan: "basic",
  });

  expect(mockSendMail).toHaveBeenCalledTimes(1);
});
