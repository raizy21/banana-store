import { loadEnv } from "../utils/loadEnv.js";
import transporter from "../config/nodemailer.js";

loadEnv(); // Load environment variables from .env file

export const sendEmailController = async (req, res) => {
  try {
    console.log("received form data:", req.body);

    const { firstName, secondName, email, phone, message, plan } = req.body;

    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `new Contact from ${firstName} ${secondName}`,
      text: `
        name: ${firstName} ${secondName}
        email: ${email}
        phone: ${phone}
        plan: ${plan}
        message: ${message}
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("email sent info:", info);
    res.status(200).json({ message: "email sent successfully", info });
  } catch (error) {
    console.error("email error:", error);
    res.status(500).json({ message: "failed to send email", error });
  }
};
