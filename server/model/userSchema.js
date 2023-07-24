const mongooose = require('mongoose');  
const bcrypt = require('bcryptjs');  

// This is document structure
const userSchema = new mongooose.Schema({
    name: {
        type: String,
        required: true
    },
    email: { 
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    }
});

// This is a kind of middleware
// Calling the pre function to hash password 
// Have installed bcryptjs

userSchema.pre('save', async function (next){
    console.log("I am pre");
    if(this.isModified('password')){
        console.log("I am pre password");
        this.password = await bcrypt.hash(this.password, 12);// password hash kr rhe hai
        this.cpassword = await bcrypt.hash(this.cpassword, 12); 
    }
    next();
});

// collection & model creation 
// user ka U capital hoga

const User = mongooose.model('USER', userSchema); // Yaha pr capital mei USER likha hai ....... mongodb ki site pr yeh small letter and plural form mei ho jayega ie users

module.exports = User;

// A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection

// User schema defines the structure of the document