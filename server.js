const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require('dotenv').config();

// server used to send emails
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', // Adjust this to match your frontend URL
  optionsSuccessStatus: 200
};


app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));

const app_pass = process.env.APP_PASS;
const email_user = process.env.EMAIL_USER;




if (!app_pass || !email_user) {
  console.error("Missing environment variables for email authentication");
  process.exit(1);
}

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email_user,
    pass: app_pass
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + ' ' + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: email_user,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ code: 500, status: "Error sending message" });
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
