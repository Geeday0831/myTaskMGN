// defining my variables
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express app for the program
const app = express();
app.use(cors());
app.use(bodyParser.json());

//Here i have the MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('MongoDB connection error:', err));

// Routes spaces
const authRoutes = require('./routes/authRoutes');
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Export Express app as a Vercel function. i only applied this method because the fly.io kept requesting for my card details for registration and also refuses to work with the input where used.
module.exports = app;
