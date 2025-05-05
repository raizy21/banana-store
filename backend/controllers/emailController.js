export const sendEmailController = async (req, res) => {
  try {
    res.status(200).json({ message: "email sent successfully", result });
  } catch (error) {
    res.status(500).json({ message: "failed to send email", error });
  }
};
