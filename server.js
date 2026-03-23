const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors()); // Allow requests from the frontend
app.use(express.json()); // Parse JSON bodies

// API Endpoint for Contact Form
app.post('/api/contact', (req, res) => {
  const { name, email, service, message } = req.body;

  // Input validation (basic)
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: 'Please fill in all required fields.' });
  }

  // Log the data (In a real app, you would send an email or save to a database here)
  console.log('------------------------------------------------');
  console.log('New Contact Form Submission:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Service:', service);
  console.log('Message:', message);
  console.log('------------------------------------------------');

  // Simulate network delay to show loading state on frontend
  setTimeout(() => {
    res.status(200).json({ success: true, message: 'Thank you! Your message has been sent.' });
  }, 1000);
});

// Start Server
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});
