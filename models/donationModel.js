const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    address:{
        type:String,
    },
    amount:{
        type:String,
    },
    phoneno:{
        type:String,
    },
    buyer:{
        type:String,
    },
})

module.exports = mongoose.model('donation',donationSchema);