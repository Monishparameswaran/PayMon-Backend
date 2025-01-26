// backend/db.js
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:5how8HoKUEKibEUG@cluster0.pydstvs.mongodb.net/PaytmClone")

// Create a Schema for Users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30,
        required: true
    },
    password: {
        type: String,
        minLength: 6,
        required: true
    },
    firstName: {
        type: String,
        trim: true,
        maxLength: 50,
        required: true
    },
    lastName: {
        type: String,
        trim: true,
        maxLength: 50,
        required: true
    }
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
	User,
    Account 
};