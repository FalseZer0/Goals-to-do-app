const express = require('express');
const colors = require('colors');
const connectDB = require('./config/db');
const dotenv = require('dotenv').config(); // access .env files with variables
const {errorHandler} = require('./middleware/errorMiddleware');
const path = require('path');
const port = process.env.PORT||5000;
connectDB();
const app = express();

//this serves as middleware so essentially called everytime req is made 
//the order here matters
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/goals',require('./routes/goalRoutes'))
app.use('/api/users',require('./routes/userRoutes'))

// Serve frontend
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
  
    app.get('*', (req, res) =>
      res.sendFile(
        path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')
      )
    )
  } else {
    app.get('/', (req, res) => res.send('Please set to production'))
  }
  
app.use(errorHandler);

app.listen(port,()=>{console.log(`server started on port ${port}`)});