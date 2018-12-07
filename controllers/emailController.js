const nodemailer = require("nodemailer");
const emailCreds = require("../config/emailCreds");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: emailCreds.username,
    pass: emailCreds.password
  }
});

module.exports = {
  sendEmailMessage: async (req, res) => {
    console.log("req.body", req.body);
    const { data } = req.body;
    const mailOptions = emailCreds.mailOptions;
    mailOptions.html = `<p>${data.message}</p>`;

    transporter.sendMail(mailOptions, function(err, emlResponse) {
      if (err) {
        res.status(501).send(err);
      } else {
        res.status(201).send(emlResponse);
      }
    });
  }
};
