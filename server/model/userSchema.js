const mongooose = require('mongoose');  

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
})

// creating model

// user ka U capital hoga
const User = mongooose.model('USER', userSchema); // Yaha pr capital mei USER likha hai ....... mongodb ki site pr yeh small letter and plural form mei ho jayega ie users

module.exports = User;

// A document schema is a JSON object that allows you to define the shape and content of documents and embedded documents in a collection

// User schema defines the structure of the document