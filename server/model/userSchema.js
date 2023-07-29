const mongooose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// This is document structure
// userSchema instance hai
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
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

// This is a kind of middleware
// Calling the pre function to hash password 
// Have installed bcryptjs

// yaha pr normal function use kr rhe hai , arrow function nhi kyuki arrow function ke sath this keyword nhi use kr skte
userSchema.pre('save', async function (next) {
    console.log("I am pre");
    if (this.isModified('password')) {
        console.log("I am pre password");
        this.password = await bcrypt.hash(this.password, 12);// password hash kr rhe hai
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// Generating token
// userSchema instance hai and agr instance ke sath work kr rhe hai tb we use 'method'
// sign ke andar 2 cheze pass karenge => payload & secret key
//payload unique hona chahiyeh
// secret key config file mei likhenge and min 32 character likhna chahiyeh stron krne ke liye

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this.id }, process.env.SECRET_KEY); //Token generate ho rha hai eisse
        this.tokens = this.tokens.concat({ token: token }); //Token add kr rhe hai
        // let tokenThapa = jwt.sign({ _id: this.id}, process.env.SECRET_KEY); //Token generate ho rha hai eisse
        // this.tokens = this.tokens.concat({ token: tokenThapa}); //Token add kr rhe hai
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
}



// collection & model creation 
// user ka U capital hoga

const User = mongooose.model('USER', userSchema); // Yaha pr capital mei USER likha hai ....... mongodb ki site pr yeh small letter and plural form mei ho jayega ie users

module.exports = User;

// A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection

// User schema defines the structure of the document