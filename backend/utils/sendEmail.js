import transporter from "../config/nodemailer.js";
import { loadEnv } from "./loadEnv.js"; // importing loadEnv function to load environment variables

// loading environment variables from .env file
loadEnv();

const sendEmail = async ({
  firstName,
  secondName,
  email,
  phone,
  message,
  plan,
}) => {
  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: "banana message",
    text: `
      first name: ${firstName}
      second name: ${secondName}
      email: ${email}
      phone: ${phone}
      message: ${message}
      plan: ${plan}

    `,
  };

  return transporter.sendMail(mailOptions);
};

export default sendEmail;
