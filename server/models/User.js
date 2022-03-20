const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    loginID: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    }
})