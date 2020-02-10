//Import npm packages
require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api')

const uri = process.env.MONGO_URI;

mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true});

mongoose.connection.on('connected',()=>{
  console.log('Mongoose is connected!!!')
});

app.use(express.json());
app.use(express.urlencoded({extended:false}));


 
//HTTP request logger
app.use(morgan('tiny'));
app.use('/api',routes)



app.listen(PORT, console.log(`Server is starting at ${PORT}`));
