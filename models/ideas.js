const mongoose = require('../db/db');

const ideas = new mongoose.Schema({
    eventID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'event',
        require : true
    }, 
    name: { 
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student',
        require : true
    },
    time:{
        type: Date,
        default: Date.now()
    },
    comments:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'comments'
    }],
});

module.exports = mongoose.model('ideas', ideas);
