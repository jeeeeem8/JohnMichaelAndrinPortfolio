const nodemailer = require("nodemailer");
require("dotenv").config();

const sendEmail = async (name, message) => {

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.RECEIVER_EMAIL,
    subject: `Portfolio Message from ${name}`,
    html: `
      <h2>New Portfolio Message</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Message:</b> ${message}</p>
    `
  });
};

module.exports = sendEmail;