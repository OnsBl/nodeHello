const nodemailer = require("nodemailer");


const transporter = nodemailer.createTransport({
  service: "Gmail", 
  auth: {
    user: "Email",
    pass: "Password",
  },
});


const mailOptions = {
  from: "myemail", 
  to: "destinationemail", 
  subject: "Test Email",
  text: "This is a test email",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error sending email:", error);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
