// const mongoose = require('mongoose');

const dotenv = require('dotenv');
// dotenv => we are using to secure our password and api keys

const express = require('express');
// stackoverflow se dekha

const app = express();

dotenv.config({ path: './config.env' }); // ek baar eisko app.js mei likh diya toh process.env khi bhi use kr skte zaruri nhi hai baar baar vha likho jaha use kr rhe hai

require('./db/conn');
app.use(express.json());
// data json format mei aa rha tha and application nhi smjh rha tha usko and undefined show kr rha tha, data display ho eisliye essa kr rhe

// const User = require('./model/userSchema');
// Comment out eisliye kiya kyuki we do not need it right now. This was basically written to demonstrate how to import user schema

const PORT = process.env.PORT;

// Linking the router to app.js
// In router we are creating routes , this is backend router
app.use(require('./router/auth'));
// auth.js -> .js extension eisliye nhi likha kyuki app jaha import kr rhe hai voh bhi js file hai

// Middleware
// const middleware = (req, res, next) => {
//     console.log(`Hello this is my middleware checking`);
//     next();
// }
// MIDDLEWARE : Middleware functions are functions that have access to the request object (req), the response object(res), and the next function in the application's request response cycle. The next function is a function in the express router which when invoked, executes the middleware succeeding the current middleware.
// Jab hum about page pr click krenge tab middleware ke help se check krenge ki user login hai ya nhi hai. Agr user login nhi toh phir hum about page pr login vla hei dikhaenge and agr login hai toh phir about page dikhega


// ROUTING

// app.get('/', (req, res) => {
//     res.send(`Hello World from Server => App.js`);
// });


//Commenting out app.get => middleware
// app.get('/about', middleware, (req,res) => {
//     console.log(`About after middleware checking => App.js`);
//     res.send(`About`);
// });

// app.get('/contact', (req,res) => {
//     res.send(`Contact => App.js`);
// });

// app.get('/signin', (req, res) => {
//     res.send(`Signin => App.js`);
// });

// app.get('/signup', (req, res) => {
//     res.send(`SignUp => App.js`);
// });

app.listen(PORT, () => {
    console.log(`Server is running at port no ${PORT}`);
});