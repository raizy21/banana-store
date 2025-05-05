import nodemailer from "nodemailer"; // importing nodemailer to send emails
import { loadEnv } from "../utils/loadEnv.js"; // importing loadEnv function to load environment variables

// loading environment variables from .env file
loadEnv();

// creating a transporter object using nodemailer to send emails
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// testing the transporter object by sending a test email
const mailOptions = {
  from: "andrei.dev.freelancer@gmail.com",
  to: "chiper_raizy@yahoo.com",
  subject: "test email",
  text: "hello from banana backend",
};

// sending the test email using the transporter object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("error:", error);
  }
  console.log("email sent:", info.response);
});

export default transporter;
