const express = require('express');
const router = express.Router();

// Storing data in database using ASYNC-AWAIT
require('../db/conn'); // Importing or Connecting database
const User = require("../model/userSchema");

router.get('/', (req,res) => {
    res.send(`Hello World from Server => Router.js`);
});

router.post('/register', async(req,res) => 
{ 
    const {name, email, phone, work, password, cpassword} = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({error: "Fill all the fields"}); 
    }
    
    try
    {
        const userExist = await User.findOne({email : email});
        if(userExist)
        {
            return res.status(422).json({error: "User already exist"});
        }
               
        const user = new User({name, email, phone, work, password, cpassword}); 

        await user.save();
        res.status(201).json({message: "Registration Successful"});
    }  catch(err){
        console.log(err);
    }
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