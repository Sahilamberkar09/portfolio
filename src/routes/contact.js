// routes/contact.js
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sahilamberkar2003@gmail.com",
        pass: "sthxbgbbupocnmja",
      },
    });

    await transporter.sendMail({
      from: email,
      to: "sahilamberkar2003@gmail.com",
      subject: `New Contact Form Message from ${name}`,
      text: message,
      html: `
        <h2>New Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    res
      .status(200)
      .json({ success: true, message: "Email sent successfully." });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      success: false,
      message: "Email sending failed.",
      error: error.message,
    });
  }
});

export default router;
