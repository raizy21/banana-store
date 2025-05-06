import sendEmail from "../utils/sendEmail.js";

export const sendEmailController = async (req, res) => {
  try {
    console.log("received form data:", req.body);
    const result = await sendEmail(req.body);

    console.log("email sent result:", result);
    res.status(200).json({ message: "email sent successfully", result });
  } catch (error) {
    console.error("email error:", error);
    res.status(500).json({ message: "failed to send email", error });
  }
};
