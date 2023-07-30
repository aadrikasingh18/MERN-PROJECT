const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const cookieParser = require("cookie-parser")
router.use(cookieParser())
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

// Storing data in database using ASYNC-AWAIT
require('../db/conn'); // Importing or Connecting database
const User = require("../model/userSchema");

router.get('/', (req, res) => {
    res.send(`Hello World from Server => Router.js`);
});

//REGISTRATION
router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Fill all the fields" });
    }

    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "User already exist" });
        }

        const user = new User({ name, email, phone, work, password, cpassword });

        // Yaha pe data save krne se pehle password hash krenge
        // voh humne userSchema vle mei kr diya hai
        // voh function pehle call hoga save se eisliye pre krke call kiya hai

        await user.save();
        res.status(201).json({ message: "Registration Successful" });
    } catch (err) {
        console.log(err);
    }
});

// Login 
// Condition to be checked : No empty fields
// Email must be registered already
// Password should be matched
// Invalid creditianls dalenge response mei agr password ya email mei kuch galat hoga

router.post('/login', async (req, res) => {
    //console.log(req.body);
    //res.json({message: "awesome"});
    try {
        let token;

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: "Pls fill complete details" })
        }

        const userLogin = await User.findOne({ email: email });

        //console.log(userLogin); => userLogin se pura data mill rha hai

        //password compare kr rhe hai login ke time
        //user ne jo likha hai and database mei jo save hai dono same hai ya nhi yeh cheez compare kr rhe hai ==> const isMatch = await bcrypt.compare(password, userLogin.password);

        // 2 METHOD => VERIFY & SIGN => JWT

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            if (isMatch) {
                res.json({ message: "User Login Successfully" });
                //creating json web token
                //this function returns promise

                token = await userLogin.generateAuthToken();
                console.log(token);

                // 2 parameter hote hai cookie mei
                // pehele mei cookie ka naam => jwtoken

                // expiry ka time millisecond mei hai
                res.cookie("jwtoken", token, {
                    maxAge: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
            }
            else {
                res.status(400).json({ error: "Invalid Creditials" });
            }
        }
        else {
            res.status(400).json({ error: "Invalid Creditials" });
        }


    } catch (err) {
        console.log(err);
    }
});

// about us ka page
// router.get('/about', middleware, (req,res) => {
//     console.log(`About after middleware checking => App.js`);
//     res.send(`About`);
// });
router.get('/about', authenticate, (req, res) => {
    console.log(`About Hello`);
    res.send(req.rootUser);
});

//getting user data for contact and home page
router.get('/getdata', authenticate, (req, res) => {
    console.log(`Hello get data`);
    res.send(req.rootUser);

});

//contact us page

router.post('/contact', authenticate, async(req,res) => 
{
    try{
        const{ name, email, phone, message } = req.body;
        if(!name ||  !email || !phone || !message)
        {
            console.log("error in contact form");
            return res.json({error: "plzz fill the contact form"});
        }

        const userContact = await User.findOne({ _id: req.userID});
        
        if(userContact){
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save(); 

            res.status(201).json({message: "user contact successfully"});
        }
    }catch(error){
        console.log(error);  
    }
});

// logout ka page

router.get('/logout', (req, res) => {
    console.log(`Logout Hello`);
    res.clearCookie('jwtoken', {path:'/'});
    res.status(200).send('User Logout');
});


module.exports = router;

// actual mei name:name essa hona chahiyeh but ecmascript ke feature agr key and value same hai toh sirf ek bhi likh skte

// email : email => jo left side ka email hai voh database ke field vla email hai and jo right side mei hai voh jo user de rha hai voh registration ke time, agr dono email match kr gye tb it is user exist

// Hume data chahiyeh tb we use post method => Check Restful Api video
// req.body krne se jo kuch bhi sign up page pr data ayega voh hume mill jayega

// const express = require('express');
// const app = express();
// Essa humne app.js mei likha tha eisse app ko puri functionalities express ki mill rhi thi
// Similarly, yaha pr hum yeh "const router = express.Router();" likh rhe hai
// Eisse likhne se router ko express ke Router ke sari functionalities mill rhi hai
// Jaise vaha app.get krke likha tha vaise yaha router.get krke likhenge

// App mei eise likhte the
// app.get('/', (req,res) => {
//     res.send(`Hello World from Server => App.js`);
// });

// app.get('/about', middleware, (req,res) => {
//     console.log(`About after middleware checking => App.js`);
//     res.send(`About`);
// });

// app.get('/contact', (req,res) => {
//     res.send(`Contact => App.js`);
// });

// app.get('/signin', (req,res) => {
//     res.send(`Signin => App.js`);
// });

// app.get('/signup', (req,res) => {
//     res.send(`SignUp => App.js`);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running at port no ${PORT}`);
// });

// Agr app mei bhi router likha hai and yaha bhi likha hai tab phir yaha vla content display ho rha hai agr yaha vala pehle call kiya hai app vli file mei

// Database pr data store krne ke liye sabse zyada zaruri hai ki jo user hai voh exist nhi krna chahiyeh pehle se....uska email and phone no unique hona chahiyeh


// // Storing data in database using JAVASCRIPT PROMISES
/*router.post('/register', (req,res) =>
{
    //console.log(req.body);
    //console.log(req.body.name);
    //console.log(req.body.work);
    // jaise upr likha hai vaise bhi data display kr skte but usmei pura req.body.name esse pura likhna padega
    // Agr sirf name likhne se data jaye that will be better => that can be done using object destructuring
    const {name, email, phone, work, password, cpassword} = req.body;
    //console.log(name);
    //console.log(email);
    //res.json({message: req.body});

    // 'IF' IS USED FOR CHECKING THAT ALL FIELD ENTRIES ARE FILLED OR NOT
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error: "Fill all the fields"}); // status code daalkar we can tell what can of error is occuring, net se deklena konsa status code konse error ke liye dalte
    }

    //See Mongodb video for learning more about these functions...
    // findOne and save function will return promise
    User.findOne({email : email}).then((userExist) =>
    {
        if(userExist)
        {
            return res.status(422).json({error: "User already exist"});
        }

        const user = new User({name, email, phone, work, password, cpassword}); // user ka data create ho chuka hai, new keyword ke madat se new user create kr rhe hai
        user.save().then(() =>
        {
            res.status(201).json({message: "Registration Successful"});
        }).catch (err => res.status(500).json({ error: "Failed to register"}));

    }).catch(err => {console.log(err);
    });
});

module.exports = router;*/


//ASYNC AWAIT => LONG WAY
// UPR BHI ASYNC AWAIT MEI LIKHA HAI => SHORT WAY
/*
router.post('/register', async(req,res) =>
{
    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error: "Fill all the fields"});
    }
    //.then se pta chalta hai ki voh promise hai & .then ko replace krke await likhenge

    // using try & catch (catch is used to display error)

    try
    {
        const userExist = await User.findOne({email : email});
        if(userExist)
        {
            return res.status(422).json({error: "User already exist"});
        }

        const user = new User({name, email, phone, work, password, cpassword});

        const userRegister = await user.save();
        if(userRegister)
        {
            res.status(201).json({message: "Registration Successful"});
        }
        else
        {
            res.status(500).json({error: "Registration UnSuccessful"});
        }
    }  catch(err){
        console.log(err);
    }
});
*/

// Jo data abhi hum postman se le rhe hai voh data user de ga form ke through

// JSON WEB TOKEN => LOGIN KE TIME USE HOGA, REGISTRATION KE TIME, ABOUT PAGE PR JAB JAYENGE TBHI USE HOGA
// AUTHENTICATION USING JWT
// 1. GENERATE JWT TOKEN AND STORE IT IN DATABASE
// 2. HOW TO STORE TOKEN IN THE COOKIES
// 3. GET TOKEN FROM COOKIE AND VERIFY THE USER