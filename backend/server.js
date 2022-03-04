const express = require('express');
const dotenv = require('dotenv').config(); // access .env files with variables
const {errorHandler} = require('./middleware/errorMiddleware');
const port = process.env.PORT||5000;
const app = express();

//this serves as middleware so essentially called everytime req is made 
//the order here matters
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/goals',require('./routes/goalRoutes'))

app.use(errorHandler);

app.listen(port,()=>{console.log(`server started on port ${port}`)});