// server.js
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

app.use(express.json());

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'muhindoemma39@gmail.com',
      pass: '1996Muhindo'
    }
  });

  const mailOptions = {
    from: email,
    to: 'your-email@example.com',
    subject: `Contact Form Submission from ${name}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.send('Email sent successfully');
    }
  });
});

const cors = require('cors');
app.use(cors());
app.listen(3001, () => {
  console.log('Server listening on port 3001');
});