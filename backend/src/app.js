import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config(); 

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.get("/", (req, res) => {
  res.json("Backend is working");
});

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, message: "All fields required" });
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New Portfolio Contact from ${name}`,
      text: `
            Name: ${name}
            Email: ${email}
            Message: ${message}`,
    });

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(5001, () => {
  console.log("Listening on port 5001...");
});
