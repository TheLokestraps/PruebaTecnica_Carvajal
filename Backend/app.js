const express = require('express');
require('dotenv').config()
const ErrorSerializer = require('./src/serializers/BaseSerializer');
const usersRouter = require('./src/routes/users');
const contactRouter = require('./src/routes/contact');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

const app = express();

app.use(cors(corsOptions))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', usersRouter);
app.use('/contact', contactRouter);

app.use((req, res, next) => {
  res.status(404);
  res.json(new ErrorSerializer('Not found', null));
});

app.use((err, req, res, next) => {
  const {
    statusCode = 500,
    message,
  } = err;

  res.status(statusCode);
  res.json(new ErrorSerializer(message, null));
});

module.exports = app;
