const express = require('express');
require('dotenv').config({ path: './config.env' });

const { connectDB } = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (if needed, e.g., for JSON)
// app.use(express.json());

// MongoDB connection
connectDB();

// Test route
app.get('/test', (req, res) => {
  res.send('✅ Backend and MongoDB are working!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
