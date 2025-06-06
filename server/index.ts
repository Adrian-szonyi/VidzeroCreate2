import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Configuration Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

// Early access endpoint
app.post('/api/early-access', async (req, res) => {
  const { organizationName, email } = req.body;

  if (!organizationName || !email) {
    return res.status(400).json({ error: 'Organization name and email are required' });
  }

  try {
    console.log('Attempting to send email with config:', {
      from: process.env.EMAIL_USER,
      to: 'adrian@vidzero.com.au',
      user: process.env.EMAIL_USER ? 'Set' : 'Not Set',
      pass: process.env.EMAIL_PASS ? 'Set' : 'Not Set'
    });

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'adrian@vidzero.com.au',
      subject: 'New Early Access Request',
      text: `Organization: ${organizationName}\nEmail: ${email}`,
      html: `
        <h2>New Early Access Request</h2>
        <p><strong>Organization:</strong> ${organizationName}</p>
        <p><strong>Email:</strong> ${email}</p>
      `,
    });

    console.log('Email sent successfully');
    res.status(200).json({ message: 'Request submitted successfully' });
  } catch (error) {
    console.error('Detailed error sending email:', error);
    res.status(500).json({ error: 'Failed to submit request' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log('Environment variables status:', {
    EMAIL_USER: process.env.EMAIL_USER ? 'Set' : 'Not Set',
    EMAIL_PASS: process.env.EMAIL_PASS ? 'Set' : 'Not Set'
  });
}); 