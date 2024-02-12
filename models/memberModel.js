const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    dob:{
        type:String,
    },
    phoneno:{
        type:String,
    },
    avatar:{
        type:String,
    }
})

module.exports = mongoose.model('member',memberSchema);