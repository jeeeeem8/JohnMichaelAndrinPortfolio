const sendEmail = require('../services/mailService');

const sendMessage = async (req, res, next) => {
  try {
    const { name, message } = req.body;

    if (!name || !message) {
      res.status(400);
      throw new Error("Name and message are required");
    }

    await sendEmail(name, message);

    res.json({
      success: true,
      message: "Message sent successfully!"
    });

  } catch (error) {
    next(error);
  }
};

module.exports = { sendMessage };