const mongoose = require('../db/db');

const likes = new mongoose.Schema({
    ideaID: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'ideas',
        require : true
    }, 

    staffID:[{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'staff',
        require : true
    }]
});

module.exports = mongoose.model('likes', likes);