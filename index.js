const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotenv = require('dotenv')

dotenv.config();

//connect to Db
mongoose.connect(process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('Connected do Db')
);

//Middleware
app.use(express.json());

//Import Routes
const authRoute = require('./routes/auth');

//Route Middlewares

app.use('/api/user', authRoute);

app.listen(3000, () => console.log('Server is on'));