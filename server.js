const express = require('express');
const connectDB = require('./config/db');
// const morgan = require('morgan');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));
// app.use(morgan('dev'));

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static(path.join(__dirname, 'client/build')));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
}

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on ${PORT}`));
