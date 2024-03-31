const mongoose = require('../db/db');

const studentSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    img: {
        type: String,
        default: "user.png"
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Student', studentSchema);